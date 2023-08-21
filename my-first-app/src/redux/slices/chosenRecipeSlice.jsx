import { createSlice } from "@reduxjs/toolkit"

export const chosenRecipeSlice = createSlice({
    name: "chosenRecipe",
    initialState: {
        value:'temp temp temp'
    },

    reducers:{
        setChosenRecipe: (state, action) => {
            state.value = action.payload;
        },
    },

});

export const { setChosenRecipe } = chosenRecipeSlice.actions;
export default chosenRecipeSlice.reducer