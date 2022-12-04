import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Question_prev from '../components/question_prev'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
          <Question_prev /> 
      </div>
    </div>
  )
}