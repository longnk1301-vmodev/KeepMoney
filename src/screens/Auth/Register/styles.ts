import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constants/Colors';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    marginVertical: 50,
    color: Colors.backgroundColor,
  },
  input: {
    width: (width * 80) / 100,
    height: 50,
    backgroundColor: Colors.backgroundColor,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  button: {
    backgroundColor: Colors.buttonColor,
    width: (width * 60) / 100,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  signUpButton: {
    marginTop: 15,
  },
});
