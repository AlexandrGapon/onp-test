import React from 'react'
import style from './SecondSection.module.css'
import shard1 from '../../images/secondSection/shard1.png'
import shard2 from '../../images/secondSection/shard2.png'
import shard3 from '../../images/secondSection/shard3.png'
import shard4 from '../../images/secondSection/shard4.png'


const SecondSection = () => {

    return (
        <div className={style.slide}>
            <h2 className={style.title}>Основа терапии —<br />патогенез СД2</h2>
            <img src={shard1} alt='ice shard' className={style.shard1} />
            <img src={shard2} alt='ice shard' className={style.shard2} />
            <img src={shard3} alt='ice shard' className={style.shard3} />
            <img src={shard4} alt='ice shard' className={style.shard4} />
        </div>
    )
}

export default SecondSection