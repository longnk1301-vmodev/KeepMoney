import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import MainContainer from '../screens/Main';
import SignInContainer from '../containers/SignIn';
import RegisterContainer from '../screens/Auth/Register';
import HomeContainer from '../screens/Home';

export type RootStackParamList = {
  Main: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
};

export type RootScreenProp = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerShown: false}}
      name="Main"
      component={MainContainer}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="SignIn"
      component={SignInContainer}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="SignUp"
      component={RegisterContainer}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="Home"
      component={HomeContainer}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
