import styles from "../styles/Home.module.css";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/dist/next-server/lib/head";
import Link from "next/dist/client/link";
import PageElements from "./PageElements";
import CreatePageElement from "./CreatePageElement";

const SINGLE_PAGE_QUERY = gql`
  query SINGLE_PAGE_QUERY($slug: String!) {
    page(url: $slug) {
      _id
      name
      url
      description
    }
  }
`;

export default function SinglePage({}) {
  const router = useRouter();
  const code = router.query;

  const slug = code[Object.keys(code)[0]];

  const { data, loading, error } = useQuery(SINGLE_PAGE_QUERY, {
    variables: {
      slug,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>{slug}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Page Title: {data.page.name}</h1>

        <p className={styles.description}>Edit page elements below</p>
        <p className={styles.description}>
          Page Description: {data.page.description}
        </p>

        <CreatePageElement page_id={data.page._id}/>
        <Link href="/">Back to Pages</Link>
        <PageElements page_id={data.page._id} />
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by <span className={styles.logo}>Amir MC</span>
        </a>
      </footer>
    </div>
  );
}
