import { createSlice } from "@reduxjs/toolkit"

export const chosenRegionSlice = createSlice({
    name: "chosenRegion",
    initialState: {
        value:''
    },

    reducers:{
        setChosenRegion: (state, action) => {
            state.value = action.payload;
        },
    },

});

export const { setChosenRegion } = chosenRegionSlice.actions;
export default chosenRegionSlice.reducer