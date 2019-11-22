/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';

export const LOAD_TAGS = 'boilerplate/App/LOAD_TAGS';
export const LOAD_TAGS_SUCCESS = 'boilerplate/App/LOAD_TAGS_SUCCESS';
export const LOAD_TAGS_ERROR = 'boilerplate/App/LOAD_TAGS_ERROR';

export const LOAD_USERS = 'boilerplate/App/LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'boilerplate/App/LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'boilerplate/App/LOAD_USERS_ERROR';

export const LOAD_ARTICLES = 'boilerplate/App/LOAD_ARTICLES';
export const LOAD_ARTICLES_SUCCESS = 'boilerplate/App/LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_ERROR = 'boilerplate/App/LOAD_ARTICLES_ERROR';

export const GET_NEW_USER = 'boilerplate/App/GET_NEW_USER';
export const SET_NEW_USER = 'boilerplate/App/SET_NEW_USER';
export const SET_NEW_USER_SUCCESS = 'boilerplate/App/SET_NEW_USER_SUCCESS';
export const GET_NEW_USER_ERROR = 'boilerplate/App/GET_NEW_USER_ERROR';
