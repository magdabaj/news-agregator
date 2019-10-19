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

  const addActiveTag = tag => {
    const { name } = tag;
    // const array = activeTags;
    // array.push(name);
    // setActiveTags(array);
  };
  console.log(activeTags);
  return (
    <Container>
      {tags.map(tag => (
        <TagButton key={tag.tag_id} onClick={() => addActiveTag(tag)}>
          {tag.name}
        </TagButton>
      ))}
    </Container>
  )
};

SortByTag.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default memo(SortByTag);
