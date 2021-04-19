import {combineReducers, createStore, applyMiddleware} from 'redux'
import sliderReducer from './sliderReducer'
import scrollReducer from './scrollReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    slider: sliderReducer,
    scroll: scrollReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))