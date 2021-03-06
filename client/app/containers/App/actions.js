/*
 * App Actions
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

import { SET_NEW_USER } from './constants';
import {
  LOAD_ARTICLES,
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_SUCCESS,
  LOAD_USERS,
  LOAD_USERS_ERROR,
  LOAD_USERS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_TAGS,
  LOAD_TAGS_ERROR,
  LOAD_TAGS_SUCCESS,
  GET_NEW_USER,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

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

export const getNewUser = () => ({
  type: GET_NEW_USER,
});

export const setNewUser = newUser => ({
  type: SET_NEW_USER,
  newUser,
});
