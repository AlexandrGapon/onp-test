import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSlide, setIsScrolling } from '../../reducers/scrollReducer'
import style from './ScrollBar.module.css'


const ScrollBar = () => {

    const dispatch = useDispatch()

    // variables

    const trfRegExp = /[-0-9.]+(?=px)/
    const [posX1, setPosX1] = useState(0)
    const [posX2, setPosX2] = useState(0)
    const [posFinal, setPosFinal] = useState(0)
    const test = useSelector(state => state.scroll.isScrolling)

    // additional classes

    const [styleIcon, setStyleIcon] = useState({ right: '-30px' })
    const [styleBar, setStyleBar] = useState({ width: '640px' })

    // functions

    const start = (e) => {
        dispatch(setIsScrolling(true))
        setPosX1(e.touches[0].clientX)

        setStyleIcon({
            ...styleIcon,
            transition: ''
        })
    }

    const action = (e) => {

        let transform = +styleIcon.right.match(trfRegExp)
        let width = +styleBar.width.match(trfRegExp)

        setPosX2(posX1 - e.touches[0].clientX)
        setPosX1(e.touches[0].clientX)

        // block scrolling on border

        if (posX2 < 0 && transform <= -30) {
            return
        }

        if (posX2 > 0 && transform >= 610) {
            return
        }

        ////////////////////////////

        setStyleIcon({
            ...styleIcon,
            transition: 'right',
            right: `${transform + posX2}px`
        })

        setStyleBar({
            ...styleBar,
            transition: 'width',
            width: `${width - posX2}px`
        })

        setPosFinal(e.touches[0].clientX)

        if (posFinal <= 352) {
            dispatch(setSlide(0))
        }

        if (posFinal > 352 && posFinal < 672) {
            dispatch(setSlide(1))
        }

        if (posFinal >= 672) {
            dispatch(setSlide(2))
        }
    }

    const end = (e) => {
        dispatch(setIsScrolling(false))

        if (posFinal <= 352) {
            setStyleIcon({
                ...styleIcon,
                transition: 'right .5s',
                right: '610px'
            })

            setStyleBar({
                ...styleBar,
                transition: 'width .5s',
                width: '0'
            })

            dispatch(setSlide(0))

            return
        }

        if (posFinal > 352 && posFinal < 672) {

            setStyleIcon({
                ...styleIcon,
                transition: 'right .5s',
                right: '290px'
            })

            setStyleBar({
                ...styleBar,
                transition: 'width .5s',
                width: '320px'
            })

            dispatch(setSlide(1))
            
            return
        }

        setStyleIcon({
            ...styleIcon,
            transition: 'right .5s',
            right: '-30px'
        })

        setStyleBar({
            ...styleBar,
            transition: 'width .5s',
            width: '640px'
        })

        dispatch(setSlide(2))
    }

    return (
        <div className={style.scrollBarContainer}>
            <div className={style.scrollBar} style={styleBar}></div>
            <div className={style.scrollBarIcon} style={styleIcon} onTouchStart={start} onTouchMove={action} onTouchEnd={end}></div>
            <div className={style.scrollBarSubtitle}>
                <span>1998</span>
                <span>2009</span>
                <span>2016</span>
            </div>
        </div>
    )
}

export default ScrollBar