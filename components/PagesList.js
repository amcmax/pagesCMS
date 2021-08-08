import { gql, useQuery } from "@apollo/client";
import styles from "../styles/Home.module.css";
import PageLink from "./PageLink";

export const ALL_PAGES_QUERY = gql`
  query Pages {
    pages {
      _id
      name
      url
    }
  }
`;

export default function PagesList() {
  const { loading, error, data } = useQuery(ALL_PAGES_QUERY);

  if (error) return <div>Error loading pages.</div>;
  if (loading) return <div>Loading</div>;

  const { pages: allPages } = data;

  return (
    <div className={styles.grid}>
      {allPages.map((page) => {
        return <PageLink key={page._id} page={page} />;
      })}
    </div>
  );
}
