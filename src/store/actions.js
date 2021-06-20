import generateCustomActions from '../generateActions';

const fetchActions = ['FETCH', 'FETCH_SUCCESSFUL', 'FETCH_ERROR'];
// const setActions = ['SET', 'SET_SUCCESSFUL', 'SET_ERROR'];

const loginUser = generateCustomActions('LOGIN_USER', fetchActions);

export default {
  ...loginUser,
};
