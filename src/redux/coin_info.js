import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  all_values: [],
  err: "null",
  loading:true,
}

export const coin_values = createSlice({
  name: 'coins',
  initialState,

  reducers: {

      get_prices: (state) => {  
        console.log(initialState)

    },

    filter_by_name: (state) => {
      console.log(state.all_values)
    },
    filter_by_price: (state) => {
        console.log(state.all_values)
    },
  },
})

export const { get_prices, filter_by_name, filter_by_price } = coin_values.actions

export default coin_values.reducer