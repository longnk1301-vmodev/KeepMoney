import Actions from '../../store/actions';
import {connect} from 'react-redux';
import SignUpScreen from '../../screens/Auth/Register';

const mapDispatchToProps = (dispatch: any) => ({
  signUp: (username: string, password: string, confirmPassword: string) =>
    dispatch(
      Actions['SIGN_UP/FETCH']({
        username,
        password,
        confirmPassword,
      }),
    ),
});

const mapStateToProps = (state: any) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
