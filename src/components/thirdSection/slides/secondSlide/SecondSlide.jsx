import React from 'react'
import style from './SecondSlide.module.css'
import shard1Pic from '../../../../images/thirsdSection/shard1.png'
import shard2Pic from '../../../../images/thirsdSection/shard2.png'
import shard3Pic from '../../../../images/thirsdSection/shard3.png'
import arrowsSchema from '../../../../images/thirsdSection/arrows2.png'
import fatCellPic from '../../../../images/thirsdSection/fat-cell.png'
import musclePic from '../../../../images/thirsdSection/muscle.png'
import liverPic from '../../../../images/thirsdSection/liver.png'
import brainPic from '../../../../images/thirsdSection/brain.png'
import kidneyPic from '../../../../images/thirsdSection/kidney.png'


const SecondSlide = () => {
    return (
        <div className={style.slide}>
            <h2 className={style.title}>Смертельный октет</h2>
            <div className='shards-pics'>
                <img src={shard1Pic} alt='ice shard' className={style.shard1} />
                <img src={shard2Pic} alt='ice shard' className={style.shard2} />
                <img src={shard3Pic} alt='ice shard' className={style.shard3} />
            </div>
            <div className={style.schema}>
                <img src={arrowsSchema} alt="arrows schema" className={style.arrows} />
                <span>Гипергликемия</span>
                <div className={style.figure1}>
                    β
                    <p><span>1</span><br />β-клетки</p>
                </div>
                <div className={style.figure2}>
                    2
                    <p>Инкретиновый<br />эффект</p>
                </div>
                <div className={style.figure3}>
                    3
                    <p>Дефект<br />α-клеток</p>
                </div>
                <div className={style.figure4}>
                    <img src={fatCellPic} alt="fat-cell" />
                    <p><span>4</span><br />Жировые<br />клетки</p>
                </div>
                <div className={style.figure5}>
                    <img src={musclePic} alt="muscle" />
                    <p><span>5</span><br />Мышцы</p>
                </div>
                <div className={style.figure6}>
                    <img src={liverPic} alt="liver" />
                    <p><span>6</span><br />Печень</p>
                </div>
                <div className={style.figure7}>
                    <img src={brainPic} alt="brain" />
                    <p><span>7</span><br />Головной<br />мозг</p>
                </div>
                <div className={style.figure8}>
                    <img src={kidneyPic} alt="kidney" />
                    <p><span>8</span><br />Почки</p>
                </div>
            </div>
        </div>
    )
}

export default SecondSlide