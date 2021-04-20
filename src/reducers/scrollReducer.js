const SET_SLIDE = 'SET_SLIDE'
const SET_IS_SCROLLING = 'SET_IS_SCROLLING'

const defaultState = {
    slide: 2,
    isScrolling: false
}


export default function scrollReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SLIDE:
            return {
                ...state,
                slide: action.payload
            }
        case SET_IS_SCROLLING:
            return {
                ...state,
                isScrolling: action.payload
            }
        default:
            return state
    }
}


export const setSlide = (slideIndex) => ({ type: SET_SLIDE, payload: slideIndex })
export const setIsScrolling = (isScrolling) => ({type: SET_IS_SCROLLING, payload: isScrolling})