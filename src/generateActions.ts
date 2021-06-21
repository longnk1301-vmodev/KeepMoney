import {createAction} from 'redux-actions';

export default function generateCustomActions(
  namespace: string,
  postfixesActions: string[],
) {
  let obj = {};

  postfixesActions.forEach(postfix => {
    const name = `${namespace}/${postfix}`;
    obj[name] = createAction(name);
  });

  return obj;
}
