import React from 'react'
import styles from '../../styles/Home.module.css'


export default function Add_question() {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>Title</p>
                </div>
                <div className={styles.inputcard}>
                    <form placeholder="Add a question">
                        <div className={styles.input} contentEditable="true"></div>
                        <button type="submit" className="btn-green">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}