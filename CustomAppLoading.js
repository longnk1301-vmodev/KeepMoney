import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {loadAppEnv} from './src/utils/env';

function CustomAppLoading({onFinishLoading}) {
  function handleLoadingError(error) {}

  function handleFinishLoading() {
    onFinishLoading();
  }

  useEffect(() => {
    Promise.all([loadAppEnv()]).then(handleFinishLoading, handleLoadingError);
  });

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomAppLoading;
