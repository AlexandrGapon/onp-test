import React from 'react'
import style from './ThirdSlide.module.css'
import shard1Pic from '../../../../images/thirsdSection/shard1.png'
import shard2Pic from '../../../../images/thirsdSection/shard2.png'
import shard3Pic from '../../../../images/thirsdSection/shard3.png'
import arrowsSchema from '../../../../images/thirsdSection/arrows3.png'
import fatCellPic from '../../../../images/thirsdSection/fat-cell.png'
import musclePic from '../../../../images/thirsdSection/muscle.png'
import liverPic from '../../../../images/thirsdSection/liver.png'
import brainPic from '../../../../images/thirsdSection/brain.png'
import kidneyPic from '../../../../images/thirsdSection/kidney.png'
import stomachPic from '../../../../images/thirsdSection/stomach.png'
import infectionPic from '../../../../images/thirsdSection/infection.png'
import intestinesPic from '../../../../images/thirsdSection/intestines.png'
import wrapperPic from '../../../../images/thirsdSection/wrapper.png'


const ThirdSlide = () => {
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
                <div className={style.figure1}>
                    β
                    <p><span>1</span> β-клетки</p>
                </div>
                <div className={style.figure2}>
                    <p><span>2</span><br />↓ инкретинового<br />эффекта</p>
                </div>
                <div className={style.figure3}>
                    <p><span>3</span><br />Дефект α-клеток</p>
                </div>
                <div className={style.figuresWrapper}>
                    <span>Инсулинорезистентность</span>
                    <img src={wrapperPic} alt="wrapper" className={style.wrapperPic} />
                    <div className={style.figure4}>
                        <img src={fatCellPic} alt="fat-cell" />
                        <p><span>4</span><br />Жировые клетки</p>
                    </div>
                    <div className={style.figure5}>
                        <img src={musclePic} alt="muscle" />
                        <p><span>5</span><br />Мышцы</p>
                    </div>
                    <div className={style.figure6}>
                        <img src={liverPic} alt="liver" />
                        <p><span>6</span><br />Печень</p>
                    </div>
                </div>
                <div className={style.figure7}>
                    <img src={brainPic} alt="brain" />
                    <p><span>7</span><br />Головной мозг</p>
                </div>
                <div className={style.figure8}>
                    <img src={intestinesPic} alt="intestines" />
                    <p><span>8</span><br />Микрофлора<br />кишечника</p>
                </div>
                <div className={style.figure9}>
                    <img src={infectionPic} alt="intestines" />
                    <p><span>9</span><br />Нарушение иммунной<br />регуляции/воспаление</p>
                </div>
                <div className={style.figure10}>
                    <img src={stomachPic} alt="intestines" />
                    <p><span>10</span><br />Желудок</p>
                </div>
                <div className={style.figure11}>
                    <img src={kidneyPic} alt="intestines" />
                    <p><span>11</span><br />Почки</p>
                </div>
                <span className={style.figure14}>Гипергликемия</span>
                <span className={style.figure13}>↑ глюкагон</span>
                <span className={style.figure12}>↓ амилин</span>

            </div>
        </div>
    )
}

export default ThirdSlide