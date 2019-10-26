/*
 *
 * SortArticlesByTag reducer
 *
 */
import produce from 'immer';
import { SORT_TAGS_SUCCESS } from './constants';

export const initialState = {
  matchingTags: [],
};

/* eslint-disable default-case, no-param-reassign */
const sortArticlesByTagReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SORT_TAGS_SUCCESS:
        draft.matchingTags = action.matchingTags;
        break;
    }
  });

export default sortArticlesByTagReducer;
