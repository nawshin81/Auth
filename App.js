import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";

import NotificationScreen from "./src/screens/Notification";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import * as firebase from "firebase"

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeTab = createMaterialBottomTabNavigator();
const AppDrawer=createDrawerNavigator();
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

const AppDrawerScreen=()=>{
  return(
  <AppDrawer.Navigator>
    <AppDrawer.Screen name='Home' component={HomeTabScreen}/>
    <AppDrawer.Screen name='Profile' component={ProfileScreen}/>
  </AppDrawer.Navigator>)
}

const HomeTabScreen = () => {
  return (
    <HomeTab.Navigator initialRouteName='Home'>
      <HomeTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" color="white" size={26} />
            ) : (
              <AntDesign name="home" color="white" size={22} />
            ),
        }}
      />
      <HomeTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-notifications" size={26} color="white" />
            ) : (
              <Ionicons
                name="ios-notifications-outline"
                size={22}
                color="white"
              />
            ),
        }}
      />
    </HomeTab.Navigator>
  );
};

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};
const firebaseConfig = {
  apiKey: "AIzaSyC2cKiv3cFmOEpcNTg-PoG12IqC9jGHLqE",
  authDomain: "auth-468dc.firebaseapp.com",
  databaseURL: "https://auth-468dc.firebaseio.com",
  projectId: "auth-468dc",
  storageBucket: "auth-468dc.appspot.com",
  messagingSenderId: "852209524153",
  appId: "1:852209524153:web:825c8d709aa14c1a33ea68"
};
// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}
export default App;
