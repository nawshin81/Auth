import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "black",
  },
});

export default HomeScreen;
