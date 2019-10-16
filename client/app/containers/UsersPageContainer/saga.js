import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from './constants';
import { fetchUser } from '../../utils/api/usersApi';
import { loadUsersError, loadUsersSuccess, loadUsersFinished } from './actions';

export function* handleUsersLoad() {
  try {
    const users = yield call(fetchUser)
    yield put(loadUsersSuccess(users))
    yield put(loadUsersFinished());
  } catch (error) {
    yield put(loadUsersError(error.toString()));
  }
}

export default function* watchUsersLoad() {
  yield takeEvery(types.LOAD_USERS, handleUsersLoad);
}
