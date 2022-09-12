import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  is_it_open: null,
}

export const favs_switch = createSlice({
  name: 'favs',
  initialState,

  reducers: {
    fav_open: (state) => {
      state.is_it_open = true;
      console.log(state.is_it_open)
    },
    fav_close: (state) => {
       state.is_it_open = false;
       console.log(state.is_it_open)
    },
  },
})

// Action creators are generated for each case reducer function
export const { fav_open, fav_close } = favs_switch.actions

export default favs_switch.reducer