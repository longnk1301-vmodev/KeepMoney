import update from 'immutability-helper';
import {handleActions} from 'redux-actions';
import Actions from './actions';

const initialState = {
  loading: false,
};

const reducer = handleActions(
  {
    [Actions['LOGIN_USER/FETCH']]: state => {
      return update(state, {
        $merge: {
          loading: true,
        },
      });
    },
    [Actions['LOGIN_USER/FETCH_SUCCESSFUL']]: state => {
      return update(state, {
        $merge: {
          loading: false,
        },
      });
    },
    [Actions['LOGIN_USER/FETCH_ERROR']]: state => {
      return update(state, {
        $merge: {
          loading: false,
        },
      });
    },
  },
  initialState,
);

export default reducer;
