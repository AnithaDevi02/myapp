import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "../homeslice/homeSlice";
import { cartSlice } from "../cartslice/cartSlice";

export const store = configureStore({
    reducer: {
        home: homeSlice.reducer,
        cart: cartSlice.reducer,

    },
});