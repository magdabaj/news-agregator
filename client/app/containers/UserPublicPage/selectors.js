import {createSelector, createStructuredSelector} from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userPublicPage state domain
 */

const selectUserPublicPageDomain = state =>
  state.userPublicPage || initialState;

/**
 * Other specific selectors
 */
const selectUsers = state => state.users || initialState.users;

const selectUserSlug = (state, ownProps) =>
  ownProps.match.params.slug || null;
/**
 * Default selector used by UserPublicPage
 */

const makeSelectUserPublicPage = () =>
  createSelector(
    selectUserPublicPageDomain,
    substate => substate,
  );

const makeSelectUsers = () =>
  createSelector(
    selectUserPublicPageDomain,
    substate => substate.users,
  );

const makeSelectArticles = () =>
  createSelector(
    selectUserPublicPageDomain,
    substate => substate.articles,
  )

const makeSelectLoading = () =>
  createSelector(
    selectUserPublicPageDomain,
    substate => substate.loading,
  );

const findUserBySlugSelector = () =>
  createSelector(
    selectUserSlug,
    slug => slug,
  );
const findUserSelector = () =>
  createSelector(
    selectUserPublicPageDomain,
    substate => substate.user,
  )

export default makeSelectUserPublicPage;
export { selectUserPublicPageDomain, makeSelectUsers, makeSelectLoading, findUserBySlugSelector, makeSelectArticles, findUserSelector };
