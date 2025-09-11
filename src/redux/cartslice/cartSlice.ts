import { createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
    },
    reducers: {
        setCart:(state,action: any)=> {
            state.cartItems =action.payload;
        },
        removeCart:(state,action:any)=>{
            state.cartItems=action.payload;
        },
    },
});
