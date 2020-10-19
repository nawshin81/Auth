import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { Zocial,Fontisto,FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';
import { AuthContext } from "./src/providers/AuthProvider";

const SignInScreen = (props) => {
  return (
    <AuthContext.Consumer>
    {(auth)=>(<View style={styles.viewStyle}>
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
        type='outline'
        onPress={function(){
          auth.setIsLoggedIn(true); 
        }} />
        <Button 
        icon={<FontAwesome name="user-circle-o" size={24} color="black" />}
        title="   Don't have an account?"
        type='outline'
        onPress={function () {
          props.navigation.navigate('SignUp');
        }}
        />
      </Card>
    </View>)}
    </AuthContext.Consumer>
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
