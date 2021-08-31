import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/dist/next-server/lib/head";
import Link from "next/dist/client/link";
import PageElements from "../page-elements/PageElements";
import CreatePageElement from "../page-elements/NewPageElementForm";
import NewPageElementForm from "../page-elements/NewPageElementForm";

const SINGLE_PAGE_QUERY = gql`
  query SINGLE_PAGE_QUERY($slug: String!) {
    pageByUrl(url: $slug) {
      _id
      name
      url
      description
    }
  }
`;

export default function Page({}) {
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
    <div class="container mx-auto p-6 font-mono">
      <Head>
        <title>{slug}</title>
      </Head>

      <main>
        <h1>Page Title: {data.pageByUrl.name}</h1>

        <p>Edit page elements below</p>
        <p>Page Description: {data.pageByUrl.description}</p>
        <Link href="/">Back to Pages</Link>

        <NewPageElementForm page_id={data.pageByUrl._id} />
        <PageElements page_id={data.pageByUrl._id} />
      </main>
    </div>
  );
}
