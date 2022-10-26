import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  stories: [],
};

export const newStoriesSlice = createSlice({
  name: 'newStories',
  initialState,
  reducers: {
    updateNewStories: (state, action) => {
      state.value = action.payload;
    },
    addNewStories: (state, action) => {
      state.stories = [...state.stories, action.payload];
    },
  },
});

export const { updateNewStories, addNewStories } = newStoriesSlice.actions;

export default newStoriesSlice.reducer;
