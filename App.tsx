import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './components/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './components/detailsscreen/DetailsScreen';
import CartScreen from './components/cartscreen/CartScreen';

// create a component
const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <stack.Navigator screenOptions={{headerShown:false}} initialRouteName='HomeScreen'>
         <stack.Screen name='HomeScreen' component={HomeScreen} />
         <stack.Screen name='DetailsScreen' component={DetailsScreen} />
         <stack.Screen name='CartScreen' component={CartScreen} />
       </stack.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default App;
