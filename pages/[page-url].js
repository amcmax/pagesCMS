import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'


export default function Page( { pages } ) {
  console.log('pages', pages);

  return (
    <div className={styles.container}>
    <Head>
      <title>Page Name</title>
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Page Name
      </h1>

      <p className={styles.description}>
        Edit text resources for this page 
      </p>

      <Link href="/">
           Back to Pages
      </Link>

      <div className={styles.grid}>

      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          Amir MC
        </span>
      </a>
    </footer>
  </div>
  )
}