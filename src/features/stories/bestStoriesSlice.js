import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const bestStoriesSlice = createSlice({
  name: 'bestStories',
  initialState,
  reducers: {
    updateBestStories: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateBestStories } = bestStoriesSlice.actions;

export default bestStoriesSlice.reducer;
