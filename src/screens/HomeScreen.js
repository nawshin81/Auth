import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button} from "react-native-elements";
import { AuthContext } from "./src/providers/AuthProvider";

const HomeScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View>
          <Text style={styles.textStyle}>Home Screen</Text>
          <Button
            title="Log Out"
            type="outline"
            onPress={function () {
              auth.setIsLoggedIn(false);
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
});

export default HomeScreen;
