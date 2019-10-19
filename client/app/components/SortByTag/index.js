/**
 *
 * SortByTag
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Container from './Container';
import TagButton from './TagButton';

const SortByTag = ({ tags }) => {
  const [activeTags, setActiveTags] = useState([]);
  const [activeStyle, setActiveStyle] = useState('dodgerBlue');

  const addActiveTag = tag => {
    const { name } = tag;
    const array = [...activeTags];
    array.push(name);
    console.log(array);
    setActiveTags(array);
  };
  console.log(activeTags);
  return (
    <>
      <h2>Sort articles by tags</h2>
      <Container>
        {tags.map(tag => (
          <TagButton style={{backgroundColor: activeStyle}} key={tag.tag_id} onClick={() => addActiveTag(tag)}>
            {tag.name}
          </TagButton>
        ))}
      </Container>
  < />
  )
};

SortByTag.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default memo(SortByTag);
