import generateCustomActions from '../generateActions';

const fetchActions = ['FETCH', 'FETCH_SUCCESSFUL', 'FETCH_ERROR'];

const loginUser = generateCustomActions('SIGN_IN_USER', fetchActions);
const signUpUser = generateCustomActions('SIGN_UP', fetchActions);

export default {
  ...loginUser,
  ...signUpUser,
};
