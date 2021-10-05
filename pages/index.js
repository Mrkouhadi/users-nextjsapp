import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="keywords" content="bryan users"/>
        <title>Bryan Kouhadi || list of users</title>
      </Head>
      <div>
          <h1 className={styles.title}>homepage index.js </h1>
          <p className={styles.text}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
          <Link href="/mylistings">
            <a className={styles.btn}>See my listings</a>
          </Link>
      </div>
    </>
  )
}
