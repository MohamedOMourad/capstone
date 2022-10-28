import { configureStore } from "@reduxjs/toolkit";
import socketConnection from "../socket io/socket";

export const store = configureStore({
    reducer: {
        socketConnection,
    },

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch