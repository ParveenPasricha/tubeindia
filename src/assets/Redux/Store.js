import { configureStore, createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers:{
        increment: (state) => state + 1,
        decrement: (state) => state - 1
    }
});

const store = configureStore({
    reducer:{
        counter : CounterSlice.reducer
    }
});

export const {increment, decrement} = CounterSlice.actions;
export default store;
