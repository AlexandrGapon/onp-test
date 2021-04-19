const SET_POS_INIT = 'SET_POS_INIT'
const SET_POS_Y2 = 'GET_POS_Y2'
const SET_POS_Y1 = 'SET_POS_Y1'
const SET_POS_FINAL = 'SET_POS_FINAL'
const SET_SLIDE_INDEX = 'SET_SLIDE_INDEX'

const defaultState = {
    slideIndex: 0,
    posInit: 0,
    posY1: 0,
    posY2: 0,
    posFinal: 0,
    transition: true
}


export default function sliderReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_POS_INIT:
            return {
                ...state,
                posInit: action.payload,
                posY1: action.payload
            }
        case SET_POS_Y2:
            return {
                ...state,
                posY2: action.payload
            }
        case SET_POS_Y1:
            return {
                ...state,
                posY1: action.payload
            }
        case SET_POS_FINAL:
            return {
                ...state,
                posFinal: action.payload
            }
        case SET_SLIDE_INDEX:
            return {
                ...state,
                slideIndex: action.payload
            }
        default:
            return state
    }
}

export const setPosInit = (posInit) => ({type:SET_POS_INIT, payload:posInit})
export const setPosY2 = (posY2) => ({type:SET_POS_Y2, payload:posY2})
export const setPosY1 = (posY1) => ({type:SET_POS_Y1, payload:posY1})
export const setPosFinal = (posFinal) => ({type:SET_POS_FINAL, payload:posFinal})
export const setSlideIndex = (slideIndex) => ({type:SET_SLIDE_INDEX, payload:slideIndex})