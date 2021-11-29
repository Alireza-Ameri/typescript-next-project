import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Board from '../Containers/Board'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head> 
        <title> Funny Game </title>
        <meta name="description" content="generate a game" />
      </Head>
      <Board />
    </div>
  )
}

export default Home
