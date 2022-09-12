import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [7,4],
}

export const favourites_list = createSlice({
  name: 'favlist',
  initialState,

  reducers: {
    add_to_list: (state, {payload}) => {
      state.favourites = [...state.favourites, payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { add_to_list } = favourites_list.actions

export default favourites_list.reducer