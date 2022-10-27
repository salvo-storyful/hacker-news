import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  stories: [],
};

export const topStoriesSlice = createSlice({
  name: 'topStories',
  initialState,
  reducers: {
    updateTopStories: (state, action) => {
      state.value = action.payload;
    },
    addTopStories: (state, action) => {
      state.stories = [...state.stories, action.payload];
    },
  },
});

export const { updateTopStories, addTopStories } = topStoriesSlice.actions;

export default topStoriesSlice.reducer;
