import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from './FirstSection.module.css'


const FirstSection = () => {

    const index = useSelector(state => state.slider.slideIndex)

    const [styleFooter, setStyleFooter] = useState({})

    useEffect(() => {
        if (index) {
            setStyleFooter({
                ...styleFooter,
                opacity: '0',
                transition: 'opacity .3s'
            })
        }

        if (!index) {
            setStyleFooter({
                ...styleFooter,
                opacity: '1',
                transition: 'opacity .3s'
            })
        }
    }, [index])

    return (
        <div className={style.slide}>
            <h2 className={style.title}>Всегда ли цели терапии СД2<br />на поверхности?</h2>
            <div className={style.point1}>
                <div className={style.circle1}>
                </div>
                <div className={style.circle2}>
                </div>
                <div className={style.circle3}>
                </div>
                <span>Цель по HbA1c</span>
            </div>
            <div className={style.point2}>
                <div className={style.circle1}>
                </div>
                <div className={style.circle2}>
                </div>
                <div className={style.circle3}>
                </div>
                <span>Гипогликемия</span>
            </div>
            <div className={style.point3}>
                <div className={style.circle1}>
                </div>
                <div className={style.circle2}>
                </div>
                <div className={style.circle3}>
                </div>
                <span>СС риски</span>
            </div>
            <div className={style.point4}>
                <div className={style.circle1}>
                </div>
                <div className={style.circle2}>
                </div>
                <div className={style.circle3}>
                </div>
                <span>Осложнения СД</span>
            </div>
            <div className={style.footer} style={styleFooter}>
                <span>Листайте вниз</span>
            </div>
        </div>
    )
}

export default FirstSection