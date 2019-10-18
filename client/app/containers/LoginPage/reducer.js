/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer/dist/immer';
import { DEFAULT_ACTION } from 'client/app/containers/LoginPage/constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default loginPageReducer;
