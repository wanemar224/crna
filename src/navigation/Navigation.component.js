import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen  from '../components/Home.component.js';
import DetailsScreen from '../components/Details.component.js';

const stack = createStackNavigator();
//const { Navigator, Screen }  = n

const HomeNavigator = () => (
  <stack.Navigator headerMode='none'>
    <stack.Screen name='Home' component={HomeScreen}/>
    <stack.Screen name='Details' component={DetailsScreen}/>
  </stack.Navigator>
);


export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
