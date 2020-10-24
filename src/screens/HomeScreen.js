import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  Input,
  Button,
  Card,
  Text,
  Avatar,
  Header,
  Icon,
} from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const HomeScreen = (props) => {
  const post =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <ScrollView style={styles.viewStyle}>
          <Header
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: function () {
                props.navigation.toggleDrawer();
              },
            }}
            centerComponent={{
              text: "The office",
              style: { color: "#fff", fontSize: 30 },
            }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          />
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
            <Button
              title="Post"
              type="outline"
              onPress={function () {
                props.navigation.toggleDrawer();
              }}
            />
          </Card>

          <Card>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar
                containerStyle={{ backgroundColor: "grey" }}
                rounded
                icon={{ name: "user", type: "font-awesome", color: "black" }}
                activeOpacity={1}
              />
              <Text h4Style={{ padding: 10 }} h4>
                Dwight Schrute
              </Text>
            </View>
            <Text style={{ fontStyle: "italic" }}>Posted on 10 Oct,2020</Text>
            <Text style={{ paddingVertical: 10 }}>{post}</Text>
            <Card.Divider />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Button
                type="outline"
                title="Like (12)"
                icon={<AntDesign name="like2" size={24} color="black" />}
              />
              <Button title="Comment (7)" type="outline" />
            </View>
          </Card>
          {/* 2nd post */}
          <Card>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar
                containerStyle={{ backgroundColor: "grey" }}
                rounded
                icon={{ name: "user", type: "font-awesome", color: "black" }}
                activeOpacity={1}
              />
              <Text h4Style={{ padding: 10 }} h4>
                Jim Halpert
              </Text>
            </View>
            <Text style={{ fontStyle: "italic" }}>Posted on 20 Oct,2020</Text>
            <Text style={{ paddingVertical: 10 }}>{post}</Text>
            <Card.Divider />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Button
                type="outline"
                title="Like (12)"
                icon={<AntDesign name="like2" size={24} color="black" />}
              />
              <Button title="Comment (7)" type="outline" />
            </View>
          </Card>
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
