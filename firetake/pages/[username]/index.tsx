import React from 'react'
import Answer_prev from '../../components/answer_prev'
import styles from '../../styles/Home.module.css'


export default function AnswerList() {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>name</p>
                </div>
                {/* <div className={styles.description}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </p>
                </div> */}
                <Answer_prev />
            </div>
        </div>
    )
}