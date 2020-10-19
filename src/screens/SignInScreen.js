import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { Zocial,Fontisto,FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';

const SignInScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title>Welcome to AuthApp!!!</Card.Title>
        <Card.Divider />
        <Input
          leftIcon={<Zocial name="email" size={24} color="black" />}
          placeholder="E-mail Address"
        />
        <Input 
        leftIcon={<Fontisto name="key" size={24} color="black" />}
        placeholder="Password"
        secureTextEntry={true}
        />

        <Button
        icon={<SimpleLineIcons name="login" size={24} color="black" />}
        title='   Sign In'
        type='outline' />
        <Button 
        icon={<FontAwesome name="user-circle-o" size={24} color="black" />}
        title="   Don't have an account?"
        type='outline'
        onPress={function () {
          props.navigation.navigate('SignUp');
        }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'#63a0e5'
  },
});

export default SignInScreen;
