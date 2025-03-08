import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Slice'  // ✅ import default reducer
import cartReducer from './AddCartSlice'
import authReducer from '../Redux/authSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        Cart: cartReducer,
        auth: authReducer    }
});

export default store;
