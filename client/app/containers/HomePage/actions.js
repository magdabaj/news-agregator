/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME,
  LOAD_USERS,
  LOAD_USERS_ERROR,
  LOAD_USERS_SUCCESS,
  LOAD_ARTICLES,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_ERROR,
  LOAD_TAGS,
  LOAD_TAGS_ERROR,
  LOAD_TAGS_SUCCESS,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

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

export const loadArticles = () => ({
  type: LOAD_ARTICLES,
});

export const loadArticlesSuccess = articles => ({
  type: LOAD_ARTICLES_SUCCESS,
  articles,
});

export const loadArticlesError = error => ({
  type: LOAD_ARTICLES_ERROR,
  error,
});

export const loadTags = () => ({
  type: LOAD_TAGS,
});

export const loadTagsSuccess = tags => ({
  type: LOAD_TAGS_SUCCESS,
  tags,
});

export const loadTagsError = error => ({
  type: LOAD_TAGS_ERROR,
  error,
});
