import React from 'react'
import Answer_prev from '../../components/answer_prev'
import styles from '../../styles/Home.module.css'


export default function AnswerList() {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>Your Answers</p>
                </div>
                <Answer_prev />
            </div>
        </div>
    )
}