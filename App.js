//import * as React from 'react';
// testing2
// testing3
// testing4
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "/Screens/HomeScreen";
import NewList from "/Screens/NewList";
import MyLists from "/Screens/MyLists";
import MainList from "/Screens/MainList";


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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

