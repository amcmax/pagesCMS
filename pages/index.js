import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


export default function Home( { pages } ) {
  console.log('pages', pages);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Pages CMS!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '} some pages.
        </p>

        <div className={styles.grid}>
        {pages.map(page => {
    return (
      <a key={page._id} href={`/${encodeURIComponent(page.url)}`} className={styles.card}>
        <h3>{ page.name }</h3>
      </a>
    );
  })}
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

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  });

  const { data, error, loading } = await client.query({
    query: gql`
      query Pages {
        pages {
          _id
          name
          url
        }
      }
    `
  });

  if (loading) return <p>Loading...</p>
  if (error) return 

  return {
    props: {
      pages: data.pages
    }
  }
}