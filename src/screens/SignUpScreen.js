import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { Zocial,Fontisto,FontAwesome,Ionicons} from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';

const SignUpScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title>Welcome to AuthApp!!!</Card.Title>
        <Card.Divider />
        <Input
          leftIcon={<Ionicons name="ios-person" size={24} color="black" />}
          placeholder="Name"
        />
        <Input
          leftIcon={<Ionicons name="ios-school" size={24} color="black" />}
          placeholder="Student ID"
        />
        <Input
          leftIcon={<Zocial name="email" size={24} color="black" />}
          placeholder="E-mail Address"
        />
        <Input 
        leftIcon={<Fontisto name="key" size={24} color="black" />}
        placeholder="Password"  
        secureTextEntry={true}/>

        <Button
        icon={<FontAwesome name="user-circle-o" size={24} color="black" />}
        title='   Sign Up'
        type='outline' />
        <Button 
        icon={<SimpleLineIcons name="login" size={24} color="black" />}
        title="   Already have an account?"
        type='outline'
        onPress={function () {
          props.navigation.navigate('SignIn');
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

export default SignUpScreen;
