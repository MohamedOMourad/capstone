import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})
const initialState: { socket: Socket, id: string } = {
    socket: io("http://localhost:3001"),
    id: ''
};

export const socketConnection = createSlice({
    name: "socketConnection",
    initialState,
    reducers: {
        openSocket: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        },
    },
});

export const { openSocket } = socketConnection.actions;
export default socketConnection.reducer;
