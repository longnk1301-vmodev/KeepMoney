import React from 'react';
import {StyleSheet, View} from 'react-native';
import SignInContainer from '../../containers/SignIn';

//TODO: we can handle splash screen in here
const MainScreen = () => {
  return (
    <View style={styles.wrapper}>
      <SignInContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default MainScreen;
