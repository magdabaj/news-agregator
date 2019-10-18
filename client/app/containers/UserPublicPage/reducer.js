/*
 *
 * UserPublicPage reducer
 *
 */

import produce from 'immer';
import {
  FIND_USER, FIND_USER_ERROR, FIND_USER_SUCCESS,
  LOAD_USER_ARTICLES,
  LOAD_USER_ARTICLES_ERROR,
  LOAD_USER_ARTICLES_SUCCESS,
  LOAD_USERS,
  LOAD_USERS_ERROR,
  LOAD_USERS_SUCCESS,
} from './constants';

export const initialState = {
  loadingUsers: false,
  error: false,
  users: [],
  articles: [],
  user: {
    email: '',
    name: '',
    user_id: '',
    surname: '',
    password: '',
    login: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const userPublicPageReducer = (state = initialState, action) =>
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
      case LOAD_USER_ARTICLES:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_USER_ARTICLES_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case LOAD_USER_ARTICLES_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.articles = action.articles;
        break;
      case FIND_USER:
        draft.loading = false;
        draft.error = false;
        break;
      case FIND_USER_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case FIND_USER_SUCCESS:
        draft.error = false;
        draft.loading = false;
        draft.user = action.user;
        break;
      default:
        return state;
    }
  });

export default userPublicPageReducer;
