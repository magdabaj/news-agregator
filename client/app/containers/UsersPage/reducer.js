/*
 *
 * UsersPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  LOAD_USERS,
} from './constants';

export const initialState = {
  loadingUsers: false,
  error: false,
  users: [],
};

/* eslint-disable default-case, no-param-reassign */
const usersPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_USERS:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_USERS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case LOAD_USERS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.users = action.users;
        break;
      default:
        return state;
    }
  });

export default usersPageReducer;
