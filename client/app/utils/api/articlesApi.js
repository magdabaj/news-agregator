import {handleError, handleResponse} from "./apiUtils";

let api = 'http://localhost:9000/articles/';
let apiUser = 'http://localhost:9000/articles/user/';

export const fetchArticles = async () => {
    const response = await fetch(api);
    const data = await response.json();
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const fetchUserArticles = async (user_id) => {
    const response = await fetch(apiUser + user_id);
    const data = await response.json();
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export function saveArticleApi(article) {
    return fetch(api, {
        method: article.article_id ? 'PUT' : 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(article)
    })
        .then(handleResponse)
        .catch(handleError)
}


export function deleteArticleApi(article_id) {
    return fetch( `http://localhost:9000/articles/${article_id}`, {method: 'DELETE'})
        .then(handleResponse)
        .catch(handleError)
}

