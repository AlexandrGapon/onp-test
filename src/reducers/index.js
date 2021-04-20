import { combineReducers, createStore } from 'redux'
import sliderReducer from './sliderReducer'
import scrollReducer from './scrollReducer'

const rootReducer = combineReducers({
    slider: sliderReducer,
    scroll: scrollReducer
})

export const store = createStore(rootReducer)