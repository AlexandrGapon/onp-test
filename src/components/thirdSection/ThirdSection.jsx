import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FirstSlide from './slides/firstSlide/FirstSlide'
import SecondSlide from './slides/secondSlide/SecondSlide'
import ThirdSlide from './slides/thirdSlide/ThirdSlide'
import style from './ThirdSection.module.css'
import ScrollBar from '../scrollBar/ScrollBar'


const ThirdSection = () => {

    const slide = useSelector(state => state.scroll.slide)

    const [styleTrack, setStyleTrack] = useState({transition: '', transform: 'translateX(-2048px)'})

    useEffect(() => {
        setStyleTrack({
            ...styleTrack,
            transition: 'transform 1s',
            transform: `translateX(-${slide * 1024}px)`
        })
    }, [slide])

    return (
        <div className={style.slide}>
            <ScrollBar />
            <div className={style.scrollList}>
                <div className={style.scrollTrack} style={styleTrack}>
                    <FirstSlide />
                    <SecondSlide />
                    <ThirdSlide />
                </div>
            </div>
        </div>
    )
}

export default ThirdSection