import React from 'react'
import { auth, firestore } from '../../lib/firebase';
import styles from '../../styles/Home.module.css'


export default function Add_question() {
     const createQuestion = async (e) => {
        e.preventDefault();
            const uid = auth.currentUser.uid;
            const ref = firestore.collection('users').doc(uid).collection('posts').doc(slug);
     }
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <a href="" className={styles.back}>back</a>
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