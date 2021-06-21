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
import {NAVIGATION} from '../../../constants/Common';

interface ISignUp {
  signUp: () => any;
  loading: boolean;
}

const RegisterScreen = ({signUp}: ISignUp) => {
  const navigation = useNavigation<RootScreenProp>();

  const onSignUp = () => {
    signUp('username', 'password', 'confirmPassword');
    navigation.replace(NAVIGATION.HOME);
  };

  const onNavigateToSignUp = () => {
    navigation.navigate(NAVIGATION.SIGN_IN);
  };

  return (
    <ImageBackground
      source={require('../../../assets/background.jpeg')}
      style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <View>
          <TextInput style={styles.input} placeholder="User name" />
          <TextInput style={styles.input} placeholder="Password" />
          <TextInput style={styles.input} placeholder="Confirm Password" />
        </View>
        <TouchableOpacity onPress={onSignUp} style={styles.button}>
          <Text>Ok</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={onNavigateToSignUp}>
          <Text>
            Already have account,{' '}
            <Text style={styles.signUpText}>Sign In!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
