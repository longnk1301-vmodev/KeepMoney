import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    minHeight: 100,
    backgroundColor: Colors.backgroundColor,
    borderRadius: 5,
  },
  contents: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  items: {
    margin: 5,
    width: 40,
    height: 40,
    backgroundColor: Colors.buttonColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
