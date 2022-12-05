import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Question_prev from '../components/question_prev'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
          <div className={styles.title}>
              Welcome to FireTake
          </div>
          <div className={styles.description}>
              <p></p>
          </div>
          <button className="btn-google">
            <Link href="enter">
              Sign in
            </Link>
          </button>
      </div>
    </div>
  )
}