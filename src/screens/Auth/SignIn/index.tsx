import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootScreenProp} from '../../../navigators/HomeNavigator';
import {styles} from '../Register/styles';

const LoginScreen = () => {
  const navigation = useNavigation<RootScreenProp>();

  const onLogin = () => {
    navigation.replace('Home');
  };

  const onNavigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground
      source={require('../../../assets/background.jpeg')}
      style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <View>
          <TextInput style={styles.input} placeholder="User name" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <TouchableOpacity onPress={onLogin} style={styles.button}>
          <Text>click</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={onNavigateToSignUp}>
          <Text>
            Don't have account, <Text style={styles.signUpText}>Sign up!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
