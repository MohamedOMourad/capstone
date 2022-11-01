import { configureStore } from "@reduxjs/toolkit";
import socketConnection from "../socket io/socket";
import product from "../product/product";

export const store = configureStore({
    reducer: {
        socketConnection, 
        product
    },

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch