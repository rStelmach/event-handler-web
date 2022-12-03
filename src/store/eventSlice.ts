import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: [
    {
      firstName: 'test',
      lastName: 'test',
      email: '123@test.pl',
      date: '22-04.2022',
    },
  ],
};
const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvents: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addEvents } = eventSlice.actions;
export default eventSlice.reducer;
