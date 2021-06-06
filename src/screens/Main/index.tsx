import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import LoginScreen from '../Auth/Login';
import {Colors} from '../../constants/Colors';

const MainScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpeg')}
      style={styles.wrapper}>
      <LoginScreen />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 10,
  },
});

export default MainScreen;
