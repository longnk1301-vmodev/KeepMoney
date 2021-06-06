import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainContainer from '../screens/Main';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="MainScreen" component={MainContainer} />
  </Stack.Navigator>
);

export default HomeNavigator;
