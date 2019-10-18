/*
 *
 * UserPublicPage actions
 *
 */

import {
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  LOAD_USERS,
  LOAD_USER_ARTICLES,
  LOAD_USER_ARTICLES_SUCCESS,
  LOAD_USER_ARTICLES_ERROR, FIND_USER, FIND_USER_SUCCESS, FIND_USER_ERROR
} from './constants';

export const loadUsers = () => ({
  type: LOAD_USERS,
});

export const loadUsersSuccess = users => ({
  type: LOAD_USERS_SUCCESS,
  users,
});

export const loadUsersError = error => ({
  type: LOAD_USERS_ERROR,
  error,
});

export const loadUserArticles = user_id => ({
  type: LOAD_USER_ARTICLES,
  user_id,
});

export const loadUserArticlesSuccess = articles => ({
  type: LOAD_USER_ARTICLES_SUCCESS,
  articles,
});

export const loadUserArticlesError = error => ({
  type: LOAD_USER_ARTICLES,
  error,
});

export const findUser = (users, slug) => ({
  type: FIND_USER,
  users,
  slug,
});

export const findUserSuccess = user => ({
  type: FIND_USER_SUCCESS,
  user,
});

export const findUserError = error => ({
  type: FIND_USER_ERROR,
  error,
});
