//import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import NewList from "./Screens/NewList";
import MyLists from "./Screens/MyLists";
import MainList from "./Screens/MainList";
import SearchScreen from "./Screens/SearchScreen";
import AppleSearch from "./Screens/AppleSearch";
import Checkout from "./Screens/Checkout";
import ApplePopUp from "./Screens/ApplePopUp"


// /workspaces/GrocerMate/Screens/HomeScreen.js
// TESTING
// TESTING2
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >  
         
        
        <Stack.Screen
          name="homescreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="CreateNewList"
          component={NewList}
        />
        <Stack.Screen
          name="MyLists"
          component={MyLists}
        />
        
        <Stack.Screen
          name="MainList"
          component={MainList}
        />
        
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
        />     
        
        <Stack.Screen
          name="AppleSearch"
          component={AppleSearch}
        />

        <Stack.Screen
          name="Checkout"
          component={Checkout}
        />

        <Stack.Screen
          name="ApplePopUp"
          component={ApplePopUp}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

