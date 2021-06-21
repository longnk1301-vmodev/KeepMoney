import generateCustomActions from '../generateActions';

const fetchActions = ['FETCH', 'FETCH_SUCCESSFUL', 'FETCH_ERROR'];
// const setActions = ['SET', 'SET_SUCCESSFUL', 'SET_ERROR'];

const loginUser = generateCustomActions('SIGN_IN_USER', fetchActions);

export default {
  ...loginUser,
};
