import { gql, useQuery } from "@apollo/client";
import styles from "../styles/Home.module.css";

export const ALL_ELEMENTS_QUERY = gql`
  query ALL_ELEMENTS_QUERY($page_id: String!) {
    pageResources(pageId: $page_id) {
      _id
      value
    }
  }
`;

export default function PageElements({page_id}) {
  const { loading, error, data } = useQuery(ALL_ELEMENTS_QUERY, {
    variables: {
      page_id,
    },
  });

  if (error) return <div>Error loading elements.</div>;
  if (loading) return <div>Loading</div>;

  const { pageResources: allElements } = data;

  return (
    <div className={styles.grid}>
      {allElements.map((e) => {
        return e.value;
      })}
    </div>
  );
}
