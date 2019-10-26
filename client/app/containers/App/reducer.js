/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_TAGS,
  LOAD_TAGS_ERROR,
  LOAD_TAGS_SUCCESS,
  LOAD_ARTICLES,
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_SUCCESS,
  LOAD_USERS_ERROR,
  LOAD_USERS_SUCCESS,
  LOAD_USERS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  tags: [],
  articles: [],
  users: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case LOAD_TAGS:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_TAGS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.tags = action.tags;
        break;
      case LOAD_TAGS_ERROR:
        draft.loading = false;
        draft.error = action.error;
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

export default appReducer;
