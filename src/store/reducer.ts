import update from 'immutability-helper';
import {handleActions} from 'redux-actions';
import Actions from './actions';

const initialState = {
  loading: false,
};

const reducer = handleActions(
  {
    [Actions['SIGN_IN_USER/FETCH']]: state => {
      return update(state, {
        $merge: {
          loading: true,
        },
      });
    },
    [Actions['SIGN_IN_USER/FETCH_SUCCESSFUL']]: (state, action) => {
      return update(state, {
        $merge: {
          loading: false,
          userInfo: action.payload.userInfo,
        },
      });
    },
    [Actions['SIGN_IN_USER/FETCH_ERROR']]: state => {
      return update(state, {
        $merge: {
          loading: false,
        },
      });
    },

    [Actions['SIGN_UP/FETCH']]: state => {
      return update(state, {
        $merge: {
          loading: true,
        },
      });
    },
    [Actions['SIGN_UP/FETCH_SUCCESSFUL']]: (state, action) => {
      return update(state, {
        $merge: {
          loading: false,
          userInfo: action.payload.userInfo,
        },
      });
    },
    [Actions['SIGN_UP/FETCH_ERROR']]: state => {
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
