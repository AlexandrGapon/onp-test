import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosInit, setPosY1, setPosY2, setPosFinal, setSlideIndex } from '../reducers/sliderReducer'
import style from './App.module.css'
import FirstSection from './firstSection/FirstSection'
import Pagination from './pagination/Pagination'
import ThirdSection from './thirdSection/ThirdSection'
import SecondSection from './secondSection/SecondSection'

const App = () => {
    const dispatch = useDispatch()

    // variables

    const trfRegExp = /[-0-9.]+(?=px)/
    const posInit = useSelector(state => state.slider.posInit)
    const posY1 = useSelector(state => state.slider.posY1)
    const posY2 = useSelector(state => state.slider.posY2)
    const posFinal = useSelector(state => state.slider.posFinal)
    const slideIndex = useSelector(state => state.slider.slideIndex)

    // additional classes
    
    const [styleTrack, setStyleTrack] = useState({transform: 'translateY(0px)'})

    // functions

    const slide = (slide) => {
        setStyleTrack({
            ...styleTrack,
            transition: 'transform .5s',
            transform: `translateY(-${slide * 768}px)`
        })
    }

    // start

    const start = (e) => {
        dispatch(setPosInit(e.touches[0].clientY))
        setStyleTrack({
            ...styleTrack,
            transition: ''
        })
    }
 
    // action

    const action = (e) => {

        let transform = +styleTrack.transform.match(trfRegExp)

        dispatch(setPosY2(posY1 - e.touches[0].clientY))
        dispatch(setPosY1(e.touches[0].clientY))

        setStyleTrack({
            ...styleTrack,
            transform: `translateY(${transform - posY2}px)`
        })

        dispatch(setPosFinal(posInit - posY1))
    }

    // end

    const end = (e) => {

        if (Math.abs(posFinal) > 150) {
            if (posInit < posY1 && +slideIndex > 0 && posInit !== posY1) {
                dispatch(setSlideIndex(+slideIndex - 1))
                slide(+slideIndex - 1)
                return
            }
            if (posInit > posY1 && +slideIndex < 2 && posInit !== posY1) {
                dispatch(setSlideIndex(+slideIndex + 1))
                slide(+slideIndex + 1)
                return
            }
        }
        if (posInit !== posY1) {
            slide(+slideIndex)
        }
    }

    return (
        <div className={style.app} onTouchStart={start} onTouchMove={action} onTouchEnd={end}>
            <Pagination />
            <div className={style.sliderList}>
                <div className={style.sliderTrack} style={styleTrack}>
                    <FirstSection />
                    <SecondSection />
                    <ThirdSection />
                </div>
            </div>

        </div>
    )
}

export default App