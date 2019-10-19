/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectUsers = () =>
  createSelector(
    selectHome,
    homeState => homeState.users,
  );

const makeSelectArticles = () =>
  createSelector(
    selectHome,
    homeState => homeState.articles,
  );

const makeSelectTags = () =>
  createSelector(
    selectHome,
    homeState => homeState.tags,
  );

export { selectHome, makeSelectUsername, makeSelectUsers, makeSelectArticles, makeSelectTags };
