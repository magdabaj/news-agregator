/*
 *
 * UsersPage actions
 *
 */

import {
  LOAD_USERS_SUCCESS,
  UPDATE_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  SAVE_USER,
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  DELETE_USER,
  LOAD_USERS_ERROR,
  LOAD_USERS,
  SET_USER,
  SAVE_USER_ERROR,
} from './constants';

export const loadUsers = () => ({
  type: LOAD_USERS,
});

export const loadUsersSuccess = users => ({
  type: LOAD_USERS_SUCCESS,
  users,
});

export const loadUsersError = error => ({
  type: LOAD_USERS_ERROR,
  error,
});

export const setUser = user => ({
  type: SET_USER,
  user,
});

export const saveUser = user => ({
  type: SAVE_USER,
  user,
});

export const createUserSuccess = user => ({
  type: CREATE_USER_SUCCESS,
  user,
});

export const updateUserSuccess = user => ({
  type: UPDATE_USER_SUCCESS,
  user,
});

export const saveUserError = (user, error) => ({
  type: SAVE_USER_ERROR,
  user,
  error,
});

export const deleteUser = user => ({
  type: DELETE_USER,
  user,
});

export const deleteUserSuccess = user_id => ({
  type: DELETE_USER_SUCCESS,
  user_id,
});

export const deleteUserFailed = (error, user) => ({
  type: DELETE_USER_ERROR,
  error: error.message,
  user_id: user.user_id,
});
