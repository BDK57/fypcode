import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice/userslice";
import banquetreducer from "./banquetSlice/banquetslice";
import banquetslice from "./banquetSlice/banquetslice";
const store = configureStore({
    reducer:{
        user:userslice,
        banquet:banquetslice
    }
})

export default store;