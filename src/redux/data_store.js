import { configureStore } from "@reduxjs/toolkit";
import  favs_switch from './favourites_management';
import favourites_list from './fav_list';

export const data_bank = configureStore({
    reducer: {
        favs_switch:favs_switch,
        favourites_list:favourites_list
    },

  })

