import { combineReducers, configureStore } from '@reduxjs/toolkit';

import newStoriesReducer from '../features/stories/newStoriesSlice';
import topStoriesReducer from '../features/stories/topStoriesSlice';
import bestStoriesReducer from '../features/stories/bestStoriesSlice';
import maxItemReducer from '../features/stories/maxItemSlice';

const rootReducer = combineReducers({
  newStories: newStoriesReducer,
  topStories: topStoriesReducer,
  bestStories: bestStoriesReducer,
  maxItem: maxItemReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
