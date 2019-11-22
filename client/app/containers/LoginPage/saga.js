import { LOAD_USERS } from 'containers/App/constants';
import { loginUserFailed, loginUserSuccess } from './actions';
import { LOGIN_USER } from './constants';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { loadUsersSuccess, loadUsersError } from 'containers/App/actions';
import { fetchUser, loginUserApi } from 'utils/api/usersApi';

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

export function* handleUserLogin(action) {
  try {
    console.log(action.user);
    const user = yield call(loginUserApi(action.user));
    console.log("user", user);
    // const { token } = user;
    // console.log('token', token);
    // yield put(loginUserSuccess(token));
  } catch (error) {
    yield put(loginUserFailed(error.toString()));
  }
}

export function* watchUserLogin() {
  yield takeLatest(LOGIN_USER, handleUserLogin);
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield all([watchUsersLoad(), watchUserLogin()]);
}
