import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface Item {
  item: number;
}

const Utilities = () => {
  const arrays: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const renderArray = () => {
    return arrays.map(item => {
      return (
        <View key={item.toString()} style={styles.items}>
          <Text>{item}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text>Utilities</Text>
      <View style={styles.contents}>{renderArray()}</View>
    </View>
  );
};

export default Utilities;
