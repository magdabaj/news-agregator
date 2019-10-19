/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';

export const LOAD_USERS = 'boilerplate/Home/LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'boilerplate/Home/LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'boilerplate/Home/LOAD_USERS_ERROR';

export const LOAD_ARTICLES = 'boilerplate/Home/LOAD_ARTICLES';
export const LOAD_ARTICLES_SUCCESS = 'boilerplate/Home/LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_ERROR = 'boilerplate/Home/LOAD_ARTICLES_ERROR';

export const LOAD_TAGS = 'boilerplate/Home/LOAD_TAGS';
export const LOAD_TAGS_SUCCESS = 'boilerplate/Home/LOAD_TAGS_SUCCESS';
export const LOAD_TAGS_ERROR = 'boilerplate/Home/LOAD_TAGS_ERROR';
