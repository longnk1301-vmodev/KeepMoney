import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../Register/styles';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View>
        <TextInput style={styles.input} placeholder="User name" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
