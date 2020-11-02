import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  AsyncStorage,
} from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import HeaderHome from "../components/HeaderHome";
import PostCard from "../components/PostCard";
import { getPosts } from "../requests/Posts";
import { getUsers } from "../requests/Users";

const HomeScreen = (props) => {
  const [posts, setposts] = useState([]);
  const [users, setusers] = useState([]);
  const loadPosts = async () => {
    const response = await getPosts();
    if (response.ok) {
      setposts(response.data);
    } else {
      alert(response.problem);
    }
  };
  const loadUsers = async () => {
    const response = await getUsers();
    if (response.ok) {
      setusers(response.data);
    } else {
      alert(response.problem);
    }
  };
const getName=(id)=>{
  let name=''
  users.forEach((element)=>{
    if(element.id==id)
    {
      name=element.name
    }
  })
  return name
}

  useEffect(() => {
    loadPosts();
    loadUsers();
  }, []);

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <HeaderHome navigation={props.navigation} />
          <Card>
            <Input
              placeholder="What's on your mind?"
              leftIcon={
                <MaterialCommunityIcons
                  name="lead-pencil"
                  size={24}
                  color="black"
                />
              }
            />
            <Button title="Post" type="outline" onPress={function () {}} />
          </Card>
          <FlatList
            data={posts}
            renderItem={function ({ item }) {
              return (
                <PostCard
                  author={getName(item.userId)}
                  title={item.title}
                  body={item.body}
                />
              );
            }}
          />
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "black",
  },
  viewStyle: {
    flex: 1,
  },
});

export default HomeScreen;
