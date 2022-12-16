import React from 'react'
import styles from '../../../../styles/Home.module.css'


export default function Add_comment() {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <a href="" className={styles.back}>back</a>   
                <div className={styles.title}>
                    <p>Add a question</p>
                </div>
                <div className={styles.inputcard}>
                    <form>
                        <div className={styles.input} contentEditable="true"></div>
                        <button type="submit" className="btn-green">Submit</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}