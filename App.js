/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Home, Restaurant, Order } from "./screens";
import Tabs from "./navigation/tabs";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 
const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown : false
          }}
          initialRouteName = {'Home'}
        >
          <Stack.Screen name="Home" component={Tabs}/>
          <Stack.Screen name="restaurent" component={Restaurant}/>
          <Stack.Screen name="order" component={Order}/>    
        </Stack.Navigator>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
