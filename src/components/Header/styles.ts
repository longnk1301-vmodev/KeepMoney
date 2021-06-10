import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundHeader,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerTitle: {
    color: Colors.backgroundColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  contents: {
    margin: 10,
    backgroundColor: Colors.backgroundColor,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
