import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

import HomeScreen  from '../components/Home.component.js';
import DetailsScreen from '../components/Details.component.js';
import FavoriteScreen from '../components/Favorite.component.js';
import {HomeIcon, FavoriteIcon } from '../module/Icons.js';

const stack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

const HomeNavigator = () => (
  <stack.Navigator headerMode='none'>
    <stack.Screen name='Home' component={HomeScreen}/>
    <stack.Screen name='Details' component={DetailsScreen}/>
  </stack.Navigator>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Accueil' icon={HomeIcon}/>
    <BottomNavigationTab title='Mes favories' icon={FavoriteIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Accueil' component={HomeNavigator}/>
    <Screen name='Mes favories' component={FavoriteScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);
