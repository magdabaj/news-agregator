/*
 *
 * LoginPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const loginUser = user => ({
  type: LOGIN_USER,
  user,
});

export const loginUserSuccess = token => ({
  type: LOGIN_USER_SUCCESS,
  token,
});

export const loginUserFailed = error => ({
  type: LOGIN_USER_FAILED,
  error,
});
