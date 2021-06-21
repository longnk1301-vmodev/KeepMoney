import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface IHeader {
  userInfo?: any;
}

const Header = ({userInfo}: IHeader) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Hi {userInfo?.userInfo?.name}!</Text>
      <View style={styles.contents}>
        <Text>Total Balance</Text>
        <Text>1.000.000 USD</Text>
      </View>
    </View>
  );
};

export default Header;
