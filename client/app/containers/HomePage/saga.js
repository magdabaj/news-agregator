/**
 * Gets the repositories of the user from Github
 */

import {
  call,
  put,
  select,
  takeLatest,
  all,
} from 'redux-saga/effects';
import {
  LOAD_REPOS,
  LOAD_TAGS,
  LOAD_ARTICLES,
  LOAD_USERS,
} from 'containers/App/constants';
import {
  reposLoaded,
  repoLoadingError,
  loadTagsError,
  loadTagsSuccess,
  loadUsersSuccess,
  loadUsersError,
  loadArticlesError,
  loadArticlesSuccess,
} from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { fetchUser } from '../../utils/api/usersApi';
import { fetchArticles } from '../../utils/api/articlesApi';
import { fetchTags } from '../../utils/api/tagsApi';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
}

/**
 * Downloading users from data base
 */

export function* handleUsersLoad() {
  try {
    const users = yield call(fetchUser);
    yield put(loadUsersSuccess(users));
  } catch (error) {
    yield put(loadUsersError(error.toString()));
  }
}

export function* watchUsersLoad() {
  yield takeLatest(LOAD_USERS, handleUsersLoad);
}

/**
 * Downloading articles from data base
 */

export function* handleArticlesLoad() {
  try {
    const articles = yield call(fetchArticles);
    yield put(loadArticlesSuccess(articles));
  } catch (error) {
    yield put(loadArticlesError(error.message));
  }
}

export function* watchArticlesLoad() {
  yield takeLatest(LOAD_ARTICLES, handleArticlesLoad);
}

export function* handleTagsLoad() {
  try {
    const tags = yield call(fetchTags);
    yield put(loadTagsSuccess(tags));
  } catch (error) {
    yield put(loadTagsError(error.message));
  }
}

export function* watchTagsLoad() {
  yield takeLatest(LOAD_TAGS, handleTagsLoad);
}

export default function* rootSaga() {
  yield all([
    watchUsersLoad(),
    githubData(),
    watchArticlesLoad(),
    watchTagsLoad(),
  ]);
}
