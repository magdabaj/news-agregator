/**
 *
 * SortArticlesByTag
 *
 */

import ArticlesComponent from "components/ArticlesComponent/Loadable";
import Container from './Container';
import TagButton from './TagButton';
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSortArticlesByTag, { makeSelectMatchingTags } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { sortTags } from './actions';

const SortArticlesByTag = ({ tags, matchingTags, ...props }) => {
  useInjectReducer({ key: 'sortArticlesByTag', reducer });
  useInjectSaga({ key: 'sortArticlesByTag', saga });

  const [activeTags, setActiveTags] = useState([]);
  const [activeStyle, setActiveStyle] = useState(
    tags.map(tag => ({
      'tagId': tag.tag_id,
      'color': 'dodgerBlue',
    })),
  );
  console.log('activeStyle', activeStyle);
  console.log('matchingTags', matchingTags);

  const addActiveTag = tag => {
    const { name, tag_id } = tag;
    const array = [...activeTags];
    array.push(name);
    setActiveTags(array);
    props.sortTags(tag);
  };
  console.log('active tags', activeTags);
  console.log('active style', activeStyle);
  return (
    <>
      <h2>Sort articles by tags</h2>
      <Container>
        {tags.map(tag => (
          <TagButton
            style={{ backgroundColor: activeStyle.color }}
            key={tag.tag_id}
            onClick={() => addActiveTag(tag)}
          >
            {tag.name}
          </TagButton>
        ))}
        {matchingTags.map(tag => (
          <ArticlesComponent articles={tag.articles}/>
          // tag.articles.map(article => (
          //   <>
          //     <h3>{article.title}</h3>
          //     <a href={article.url}>{article.url}</a>
          //   </>
          // ))
        ))}
      </Container>
    </>
  );
}

SortArticlesByTag.propTypes = {
  tags: PropTypes.array.isRequired,
  sortTags: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sortArticlesByTag: makeSelectSortArticlesByTag(),
  matchingTags: makeSelectMatchingTags(),
});

function mapDispatchToProps(dispatch) {
  return {
    sortTags: activeTags => dispatch(sortTags(activeTags)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SortArticlesByTag);
