import React from 'react'
import { useSelector } from 'react-redux'
import style from './Pagination.module.css'

const Pagination = () => {

    const slideIndex = useSelector(state => state.slider.slideIndex)

    return (
        <div className={style.pagination}>
            <div className={slideIndex === 0 && style.active || style.paginationItem}></div>
            <div className={slideIndex === 1 && style.active || style.paginationItem}></div>
            <div className={slideIndex === 2 && style.active || style.paginationItem}></div>
        </div>
    )
}

export default Pagination