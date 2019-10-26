import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { makeSelectTags } from '../App/selectors';
import { makeSelectMatchingTags } from './selectors';
import { SORT_TAGS } from './constants';
import { sortTagsSuccess } from './actions';

// Individual exports for testing
export function* handleTagsSort(action) {
  const tags = yield select(makeSelectTags());
  const { activeTag } = action;
  const matchingTags = yield select(makeSelectMatchingTags());
  // const array = [...matchingTags];
  const newMatchingTags = tags.filter(tag => tag.name === activeTag.name) || null;
  if (newMatchingTags) {
    // array.concat(matchingTag);
    // Array.prototype.push.apply(array, matchingTag);
    // yield put(sortTagsSuccess(array));
    yield put(sortTagsSuccess(newMatchingTags));
  }
}

export function* watchTagsSort() {
  yield takeLatest(SORT_TAGS, handleTagsSort);
}
export default function* rootSaga() {
  yield all([watchTagsSort()]);
}
