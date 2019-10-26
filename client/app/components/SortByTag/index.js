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
  const [activeStyle, setActiveStyle] = useState(
    tags.map(tag => ({
      'tagId': tag.tag_id,
      'color': 'dodgerBlue',
    })),
  );
  console.log(activeStyle);

  const addActiveTag = tag => {
    const { name, tag_id } = tag;
    const array = [...activeTags];
    array.push(name);
    setActiveTags(array);
    if (activeStyle.includes(act => act.tagId === tag_id)) {
      setActiveStyle({
        "tagId": tag_id,
        "color": "red",
      });
    }
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
      </Container>
    </>
  );
};

SortByTag.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default memo(SortByTag);
