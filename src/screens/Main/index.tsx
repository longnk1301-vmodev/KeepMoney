import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoginScreen from '../Auth/SignIn';

const MainScreen = () => {
  return (
    <View style={styles.wrapper}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default MainScreen;
