import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import HeaderHome from "../components/HeaderHome";
import PostCard from "../components/PostCard";
import { useNetInfo } from "@react-native-community/netinfo";
import * as firebase from "firebase";
import "firebase/firestore";
const HomeScreen = (props) => {
  const clearinput = React.createRef();
  const netInfo = useNetInfo();
  if (netInfo.type != "unknown" && !netInfo.isInternetReachable) {
    alert("No internet connection");
  }
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(false);
  const [input, setinput] = useState("");
  const loadPosts = async () => {
    setloading(true);
    firebase
      .firestore()
      .collection("posts")
      .orderBy("created_at","desc")
      .onSnapshot((querySnapShot) => {
        let temp_posts = [];
        querySnapShot.forEach((doc) => {
          temp_posts.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setposts(temp_posts);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        alert(error);
      });
    
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <HeaderHome navigation={props.navigation} />
          <Card>
            <Input
            ref={clearinput}
              placeholder="What's on your mind?"
              leftIcon={
                <MaterialCommunityIcons
                  name="lead-pencil"
                  size={24}
                  color="black"
                />
              }
              onChangeText={(currentinput) => {
                setinput(currentinput);
              }}
            />
            <Button
              title="Post"
              type="outline"
              onPress={function () {
                setloading(true);
                firebase
                  .firestore()
                  .collection("posts")
                  .add({
                    userId: auth.CurrentUser.uid,
                    body: input,
                    author: auth.CurrentUser.displayName,
                    created_at: firebase.firestore.Timestamp.now(),
                    likes: [],
                    comments: [],
                  })
                  .then(() => {
                    setloading(false);
                    alert("Post created successfully");
                    clearinput.current.clear();
                  })
                  .catch((error) => {
                    setloading(false);
                    alert(error);
                  });
              }}
            />
          </Card>
          <ActivityIndicator size="large" color="red" animating={loading} />
          <FlatList
            data={posts}
            renderItem={function ({ item }) {
              return (
                <PostCard
                  author={item.data.author}
                  title={item.id}
                  body={item.data.body}
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
