import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {MainNavigator, NavigationService} from './src/navigators';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.container}>
        <MainNavigator
          ref={ref => NavigationService.setTopLevelNavigator(ref)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
