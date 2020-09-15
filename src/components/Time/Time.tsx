import React, {useEffect, useState} from "react";
import styles from './Time.module.css'



export function Time() {
    //state timerId позволяет присвоить ему значние timer_id и тем самым выйти из функии и остановить setInterval
    const [timerId, setTimerId] = useState(0);
    // state date в сочетании с setInterval позволяет делать перерисовку
    const [date, setDate] = useState(new Date());
    //


    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds =new Date().getSeconds();
    let day1 = new Date().getDate();
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    let month = months[new Date().getMonth()];
    let year = new Date().getFullYear();


    const onClickStartTime = () => {
        clearInterval(timerId); // останавливает предыдущий таймер
        let timer_id = setInterval( ()=>setDate( new Date() ),1000); // присваиваем id = setInterval
            setTimerId(Number(timer_id)); //сетаем значение id, чтобы потом до него можно было достучаться для остановки
    }

    const onClickStopTime = () => {
        clearInterval(timerId); // останавливаем setInterval
    }

    return(
        <div>
            <div className={styles.display}>
                {hours}:{minutes>=0&&minutes<10?0:""}{minutes}:{seconds>=0&&seconds<10?0:""}{seconds}
                <div  className={styles.date}>
                    {day1} {month} {year}
                </div>
            </div>

            <div className={styles.bottomField}>
                <button
                    onClick={onClickStartTime}
                >start</button>
                <button
                    onClick={onClickStopTime}
                >stop</button>
            </div>

        </div>
    )
}