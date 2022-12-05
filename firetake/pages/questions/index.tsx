import React from 'react'
import Question_prev from '../../components/question_prev'
import styles from '../../styles/Home.module.css'


export default function AnswerList() {
    return(
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <Question_prev />
                </div>
            <button className={styles.plus}>+</button>
            </div>
        </div>
    )
}