import Actions from '../../store/actions';
import {connect} from 'react-redux';
import SignInScreen from '../../screens/Auth/SignIn';

const mapDispatchToProps = (dispatch: any) => ({
  signIn: (username: string, password: string) =>
    dispatch(
      Actions['SIGN_IN_USER/FETCH']({
        username,
        password,
      }),
    ),
});

const mapStateToProps = (state: any) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
