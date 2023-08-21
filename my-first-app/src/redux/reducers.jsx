import { combineReducers } from 'redux'
import chosenRegion from './slices/chosenRegionSlice'
//import recipeRegionalResults from './slices/recipeRegionalResultsSlice'
import chosenRecipe from './slices/chosenRecipeSlice'

const rootReducer = combineReducers({
    chosenRecipe,
    chosenRegion,
    //recipeRegionalResults, - can't be coded till we have the API structure. 
})

export default rootReducer