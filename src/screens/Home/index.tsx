import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../../components/Header';
import Revenue from '../../components/Revenue';
import SpendingLimit from '../../components/SpendingLimit';
import LookupRate from '../../components/LookupRate';
import Utilities from '../../components/Utilities';
import SpendingAnalysis from '../../components/SpendingAnalysis';
import Saving from '../../components/Saving';
import {styles} from './styles';

interface IHome {
  userInfo?: any;
}

const HomeScreen = ({userInfo}: IHome) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Header userInfo={userInfo} />
        <Revenue />
        <SpendingLimit />
        <LookupRate />
        <Utilities />
        <SpendingAnalysis />
        <Saving />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
