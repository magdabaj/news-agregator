import { handleError, handleResponse } from './apiUtils';

// const api = 'http://localhost:9000/articles/';
// const apiUser = 'http://localhost:9000/articles/user/';
const api = 'http://localhost:51044/api/articles';

export const fetchArticles = async () => {
  const response = await fetch(api);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export const fetchUserArticles = async userId => {
  const response = await fetch(
    `http://localhost:51044/api/users/${userId}/articles`,
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export function saveArticleApi(userId, article) {
  return fetch(
    `http://localhost:51044/api/users/${userId}/articles/${article.id}`,
    {
      method: article.id ? 'PUT' : 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(article),
    },
  )
    .then(handleResponse)
    .catch(handleError);
}

export function deleteArticleApi(userId, articleId) {
  return fetch(
    `http://localhost:51044/api/users/${userId}/articles/${articleId}`,
    { method: 'DELETE' },
  )
    .then(handleResponse)
    .catch(handleError);
}
