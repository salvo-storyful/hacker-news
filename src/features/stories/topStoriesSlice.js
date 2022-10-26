import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const topStoriesSlice = createSlice({
  name: 'topStories',
  initialState,
  reducers: {
    updateTopStories: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateTopStories } = topStoriesSlice.actions;

export default topStoriesSlice.reducer;
