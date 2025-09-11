import { createSlice} from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name:"home",
    initialState:{
        loading: true,
    },
    reducers: {
        setLoading: (state, actions) => {
            state.loading = actions.payload;
        },
    }
});