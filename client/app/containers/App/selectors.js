/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectTags = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.tags,
  );

const makeSelectUsers = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.users,
  );

const makeSelectArticles = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.articles,
  );

const makeSelectNewUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.newUser,
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectTags,
  makeSelectArticles,
  makeSelectUsers,
  makeSelectNewUser,
};
