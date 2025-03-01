import { createSlice } from "@reduxjs/toolkit";

const AddCartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cartItem: []
    },
    reducers:{
        Addtocart :(state, action)=>{
            const existingItem = state.cartItem.find(item => item.id === action.payload.id )
            if(existingItem){
                existingItem.quantity += 1
            }
            else{
                state.cartItem.push({...action.payload, quantity : 1})
            }
        }
    }
})

export const {Addtocart} = AddCartSlice.actions
export default AddCartSlice.reducer