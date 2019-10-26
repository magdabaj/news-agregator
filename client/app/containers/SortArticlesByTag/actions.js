/*
 *
 * SortArticlesByTag actions
 *
 */

import { SORT_TAGS, SORT_TAGS_ERROR, SORT_TAGS_SUCCESS } from './constants';

export const sortTags = activeTag => ({
  type: SORT_TAGS,
  activeTag,
});

export const sortTagsSuccess = matchingTags => ({
  type: SORT_TAGS_SUCCESS,
  matchingTags,
});

export const sortTagsError = error => ({
  type: SORT_TAGS_ERROR,
  error,
});
