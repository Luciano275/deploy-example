import styles from '@/styles/Home.module.css';
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            About
          </p>
        </div>
      </main>
    </>
  )
}