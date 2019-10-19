/**
 *
 * ArticlesComponent
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

const ArticlesComponent = ({articles, users}) => {
  return (
    <>
      {articles.length > 0 ?
        (
          <div>
            {articles.map(article => (
              <div>
                <h4>{article.title}</h4>
                <div><a href={article.url} target='_blank'>{article.url}</a></div>
                <p><Link to={`users/${article.email}`}>{article.name} {articles.surname}</Link></p>
              </div>
            ))}
          </div>
        ) :
        articles.length === 0 ?
          <h3>User has no articles yet</h3> :
        <Spinner />}
    </>
  );
}

ArticlesComponent.propTypes = {
  articles: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};

export default memo(ArticlesComponent);
