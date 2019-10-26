/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_USERNAME,
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES,
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  LOAD_TAGS,
  LOAD_TAGS_SUCCESS,
  LOAD_TAGS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  articles: [],
  users: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case LOAD_ARTICLES:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_ARTICLES_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.articles = action.articles;
        break;
      case LOAD_ARTICLES_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case LOAD_USERS:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_USERS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.users = action.users;
        break;
      case LOAD_USERS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      default:
        return state;
    }
  });

export default homeReducer;
