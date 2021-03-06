/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

// import ArticlesComponent from "client/app/components/ArticlesComponent";
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectTags,
  makeSelectArticles,
  makeSelectUsers,
} from 'containers/App/selectors';
import Spinner from 'components/Spinner/Loadable';
import SortArticlesByTag from 'containers/SortArticlesByTag/Loadable';
import CenteredSection from './CenteredSection';
import Section from './Section';
import { loadRepos, loadTags, loadUsers, loadArticles } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  users,
  onChangeUsername,
  articles,
  tags,
  ...props
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
    if (users.length === 0) props.loadUsers();
    if (articles.length === 0) props.loadArticles();
    if (tags.length === 0) props.loadTags();
  }, []);

  console.log('users', users);
  console.log('tags', tags);
  console.log('articles', articles);

  // const reposListProps = {
  //   loading,
  //   error,
  //   repos,
  // };
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          {articles.length > 0 && users.length > 0 && tags.length > 0 ? (
            <div>
              <SortArticlesByTag tags={tags} />
            </div>
          ) : (
            <Spinner />
          )}
        </CenteredSection>
        <Section>

        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  loadTags: PropTypes.func.isRequired,
  loadArticles: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  users: makeSelectUsers(),
  articles: makeSelectArticles(),
  tags: makeSelectTags(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    loadUsers: () => dispatch(loadUsers()),
    loadArticles: () => dispatch(loadArticles()),
    loadTags: () => dispatch(loadTags()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
