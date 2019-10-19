/**
 *
 * ArticlesComponent
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Loadable';
// import styled from 'styled-components';

const ArticlesComponent = ({ articles }) => (
  <>
    {articles.length > 0 ? (
      <div>
        {articles.map(article => (
          <div key={article.article_id}>
            <h4>{article.title}</h4>
            <div>
              <a
                href={article.url}
                target="_blank"
              >
                {article.url}
              </a>
            </div>
            <p>
              <Link to={`users/${article.email}`}>
                {article.name} {articles.surname}
              </Link>
            </p>
          </div>
        ))}
      </div>
    ) : articles.length === 0 ? (
      <h3>User has no articles yet</h3>
    ) : (
      <Spinner />
    )}
  </>
);

ArticlesComponent.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default memo(ArticlesComponent);
