import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import HeaderHome from "../components/HeaderHome";
import PostCard from "../components/PostCard";

const HomeScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <ScrollView style={styles.viewStyle}>
          <HeaderHome navigation={props.navigation}/>
          <Card>
            <Input
              placeholder="What's on your mind?"
              leftIcon={<MaterialCommunityIcons name="lead-pencil" size={24} color="black" />
              }
            />
            <Button title="Post" type="outline" onPress={function () {}} />
          </Card>
          <PostCard
            author="Joel Banner"
            date="Posted on 17 Oct,2020"
            body="First post on this app!"
          />
        </ScrollView>
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
