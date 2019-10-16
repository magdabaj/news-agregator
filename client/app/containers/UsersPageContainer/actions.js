import * as types from './constants';

export const loadUsers = () => ({
  type: types.LOAD_USERS,
});

export const loadUsersSuccess = users => ({
  type: types.LOAD_USERS_SUCCESS,
  users,
});

export const loadUsersFinished = () => ({
  type: types.LOAD_USERS_FINISHED,
});

export const loadUsersError = error => ({
  type: types.LOAD_USERS_ERROR,
  error
});

export const setUser = user => ({
  type: types.SET_USER,
  user,
});

export const saveUser = user => ({
  type: types.SAVE_USER,
  user,
});

export const createUserSuccess = user => ({
  type: types.CREATE_USER_SUCCESS,
  user,
});

export const updateUserSuccess = user => ({
  type: types.UPDATE_USER_SUCCESS,
  user,
});

export const saveUserFinished = () => ({
  type: types.SAVE_USER_FINISHED,
});

export const saveUserError = (user, error) => ({
  type: types.SAVE_USER_ERROR,
  user,
  error,
});

export const deleteUser = user => ({
  type: types.DELETE_USER,
  user,
});

export const deleteUserSuccess = user_id => ({
  type: types.DELETE_USER_SUCCESS,
  user_id,
});

export const deleteUserFinished = () => ({
  type: types.DELETE_USER_FINISHED,
});

export const deleteUserFailed = (error, user) => ({
  type: types.DELETE_USER_ERROR,
  error: error.message,
  user_id: user.user_id,
});
