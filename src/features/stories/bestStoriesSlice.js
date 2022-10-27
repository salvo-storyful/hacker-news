import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  stories: [],
};

export const bestStoriesSlice = createSlice({
  name: 'bestStories',
  initialState,
  reducers: {
    updateBestStories: (state, action) => {
      state.value = action.payload;
    },
    addBestStories: (state, action) => {
      state.stories = [...state.stories, action.payload];
    },
  },
});

export const { updateBestStories, addBestStories } = bestStoriesSlice.actions;

export default bestStoriesSlice.reducer;
