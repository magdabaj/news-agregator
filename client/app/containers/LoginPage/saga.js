import { LOAD_USERS } from 'containers/App/constants';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { loadUsersSuccess, loadUsersError } from 'containers/App/actions';
import { fetchUser } from 'utils/api/usersApi';

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

// Individual exports for testing
export default function* loginPageSaga() {
  yield all([watchUsersLoad()]);
}
