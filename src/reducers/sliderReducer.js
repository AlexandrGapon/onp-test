const SET_SLIDE_INDEX = 'SET_SLIDE_INDEX'

const defaultState = {
    slideIndex: 0,
}


export default function sliderReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SLIDE_INDEX:
            return {
                ...state,
                slideIndex: action.payload
            }
        default:
            return state
    }
}

export const setSlideIndex = (slideIndex) => ({type:SET_SLIDE_INDEX, payload:slideIndex})