import React from 'react'
import Answer from '../../../components/answer'
import styles from '../../styles/Home.module.css'
import { Comment } from '../../../components/comment'

export default function AnswerList() {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>Title</p>
                </div>
                <Answer />
                <hr className={styles.hr}/>
                <Comment />
            </div>
        </div>
    )
}