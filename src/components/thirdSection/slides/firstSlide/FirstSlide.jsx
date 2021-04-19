import React from 'react'
import style from './FirstSlide.module.css'
import shard1Pic from '../../../../images/thirsdSection/shard1.png'
import shard2Pic from '../../../../images/thirsdSection/shard2.png'
import shard3Pic from '../../../../images/thirsdSection/shard3.png'
import arrowsSchema from '../../../../images/thirsdSection/arrows1.png'
import musclePic from '../../../../images/thirsdSection/muscle.png'
import liverPic from '../../../../images/thirsdSection/liver.png'


const FirstSlide = () => {
    return (
        <div className={style.slide}>
            <h2 className={style.title}>Звенья патогенеза СД2</h2>
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
                    <img src={musclePic} alt="muscle" />
                    <p><span>2</span><br />Мышцы</p>
                </div>
                <div className={style.figure3}>
                    <img src={liverPic} alt="liver" />
                    <p><span>3</span><br />Печень</p>
                </div>
            </div>
        </div>
    )
}

export default FirstSlide