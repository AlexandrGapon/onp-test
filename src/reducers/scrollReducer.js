const SET_SLIDE = 'SET_SLIDE'

const defaultState = {
    slide: 2,
}


export default function scrollReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SLIDE:
            return {
                ...state,
                slide: action.payload
            }
        default:
            return state
    }
}


export const setSlide = (slideIndex) => ({ type: SET_SLIDE, payload: slideIndex })