import { handleError, handleResponse } from './apiUtils';

// const api = 'http://localhost:9000/users';

const api = 'http://localhost:51044/api/users';

export const fetchUser = async () => {
  const response = await fetch(api);
  const data = await response.json();
  if(response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export function saveUserApi(user) {
  return fetch(`${api}/${user.id}`, {
    method: user.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteUserApi(userId) {
  return fetch(`http://localhost:9000/users/${userId}`, {method: 'DELETE'})
    .then(handleResponse)
    .catch(handleError);
}
