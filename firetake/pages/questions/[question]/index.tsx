import React from 'react'
import Answer_prev from '../../../components/answer_prev'
import styles from '../../../styles/Home.module.css'


export default function AnswerList() {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <a href="" className={styles.back}>back</a>
                <div className={styles.title}>
                    <p>Title</p>
                </div>
                <Answer_prev />
            </div>
            <button className={styles.plus}>+</button>

        </div>
    )
}