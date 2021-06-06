import {CommonActions, StackActions} from '@react-navigation/native';

let _navigator;

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  _navigator.dispatch(
    CommonActions.navigate({
      routeName,
      params,
    }),
  );
};

const push = (routeName, params) => {
  _navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  );
};

const replace = (navigatorName, routeName, params) => {
  _navigator.dispatch(
    StackActions.replace(navigatorName, {
      routeName,
      params,
    }),
  );
};

const pop = (n = 1) => {
  _navigator.dispatch(StackActions.pop({n}));
};

export default {
  push,
  navigate,
  replace,
  setTopLevelNavigator,
  pop,
};
