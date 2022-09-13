import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [],
}

export const favourites_list = createSlice({
  name: 'favlist',
  initialState,
                                            // ar.filter((x) => x!== a))
  reducers: {
    add_to_list: (state, {payload}) => {
      state.favourites = [...state.favourites, payload]
    },
    remove_from_list: (state, {payload}) => {
      state.favourites = state.favourites.filter((x)=> x!== payload )
    },
  },
})

// Action creators are generated for each case reducer function
export const { add_to_list, remove_from_list } = favourites_list.actions

export default favourites_list.reducer