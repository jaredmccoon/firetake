import React from 'react'
import Question_prev from '../../components/question_prev'
import styles from '../../styles/Home.module.css'


export default function AnswerList() {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <Question_prev />
            </div>
        </div>
    )
}