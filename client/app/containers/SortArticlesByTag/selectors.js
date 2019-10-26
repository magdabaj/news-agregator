import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sortArticlesByTag state domain
 */

const selectSortArticlesByTagDomain = state =>
  state.sortArticlesByTag || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SortArticlesByTag
 */

const makeSelectSortArticlesByTag = () =>
  createSelector(
    selectSortArticlesByTagDomain,
    substate => substate,
  );

const makeSelectMatchingTags = () =>
  createSelector(
    selectSortArticlesByTagDomain,
    substate => substate.matchingTags,
  );

export default makeSelectSortArticlesByTag;
export { selectSortArticlesByTagDomain, makeSelectMatchingTags };
