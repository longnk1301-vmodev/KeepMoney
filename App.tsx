import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {MainNavigator, NavigationService} from './src/navigators';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.container}>
          <MainNavigator
            ref={ref => NavigationService.setTopLevelNavigator(ref)}
          />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
