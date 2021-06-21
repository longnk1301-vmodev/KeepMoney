import {connect} from 'react-redux';
import HomeScreen from '../../screens/Home';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state: any) => {
  return {
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
