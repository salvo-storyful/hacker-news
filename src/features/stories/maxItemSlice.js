import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const maxItemSlice = createSlice({
  name: 'maxItem',
  initialState,
  reducers: {
    updateMaxItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateMaxItem } = maxItemSlice.actions;

export default maxItemSlice.reducer;
