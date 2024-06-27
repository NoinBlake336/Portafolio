import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    lenguage: null,
}


export const spainSlices = createSlice({
    name: 'spain',
    initialState: INITIAL_STATE,
    reducers: {
        getInformationsInSpain: (state, action) => {
            return {
                ...state,
                spain:
                    action.payload
            }
        } 
    }
});

export const { getInformationsInSpain } = spainSlices.actions;
export default spainSlices.reducer;