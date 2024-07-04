import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './Myactions';

export const mystore = configureStore({

    reducer: {
        counter: counterSlice,
      },


})