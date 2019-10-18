import { call, put, takeEvery, all } from 'redux-saga/effects';
import { LOAD_USERS } from './constants';
import { fetchUser } from '../../utils/api/usersApi';
import { loadUsersError, loadUsersSuccess } from './actions';

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

export default function* rootSaga() {
  yield all([watchUsersLoad()]);
}
