const SET_SLIDE = 'SET_SLIDE'
const SET_IS_SCROLLING = 'SET_IS_SCROLLING'

const defaultState = {
    subSlideIndex: 2,
    isScrolling: false
}


export default function scrollReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SLIDE:
            return {
                ...state,
                subSlideIndex: action.payload
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


export const setSubSlideIndex = (subSlideIndex) => ({ type: SET_SLIDE, payload: subSlideIndex })
export const setIsScrolling = (isScrolling) => ({type: SET_IS_SCROLLING, payload: isScrolling})