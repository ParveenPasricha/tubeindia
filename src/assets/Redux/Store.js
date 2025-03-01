import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Slice'  // ✅ import default reducer
import cartReducer from './AddCartSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        Cart: cartReducer
    }
});

export default store;
