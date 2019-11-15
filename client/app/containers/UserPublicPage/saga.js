import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import { LOAD_USERS, FIND_USER, FIND_USER_SUCCESS } from './constants';
import { fetchUser } from '../../utils/api/usersApi';
import { fetchUserArticles } from '../../utils/api/articlesApi';
import {
  loadUsersError,
  loadUsersSuccess,
  loadUserArticlesSuccess,
  loadUserArticlesError,
  findUserSuccess,
  findUserError,
} from './actions';

export function* handleUsersLoad() {
  try {
    const users = yield call(fetchUser);
    yield put(loadUsersSuccess(users));
  } catch (error) {
    yield put(loadUsersError(error.toString()));
  }
}

export function* watchUsersLoad() {
  yield takeEvery(LOAD_USERS, handleUsersLoad);
}

export function* handleUserArticlesLoad(action) {
  // const user_id = action.user_id;
  const { id } = action.user;
  try {
    const articles = yield call(fetchUserArticles, id);
    yield put(loadUserArticlesSuccess(articles));
  } catch (e) {
    yield put(loadUserArticlesError(e.message));
  }
}

export function* watchUserArticlesLoad() {
  yield takeLatest(FIND_USER_SUCCESS, handleUserArticlesLoad);
}

export function* findUser(action) {
  const { users, slug } = action;
  try {
    const user = users.find(usersItem => usersItem.email === slug);
    yield put(findUserSuccess(user));
  } catch (error) {
    yield put(findUserError(error));
  }
}

export function* watchFindUser() {
  yield takeEvery(FIND_USER, findUser);
}

export default function* rootSaga() {
  yield all([watchUsersLoad(), watchUserArticlesLoad(), watchFindUser()]);
}
