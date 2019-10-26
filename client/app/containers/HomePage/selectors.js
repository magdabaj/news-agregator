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

export { selectHome, makeSelectUsername, makeSelectUsers, makeSelectArticles };
