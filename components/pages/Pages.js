import { gql, useQuery } from "@apollo/client";
import NewPageForm from "./NewPageForm";
import PagesTable from "./PagesTable";

export const ALL_PAGES_QUERY = gql`
  query Pages {
    pages {
      _id
      name
      url
      elementsCount
    }
  }
`;

export default function Pages() {
  const { loading, error, data } = useQuery(ALL_PAGES_QUERY);

  if (error) return <div>Error loading pages.</div>;
  if (loading) return <div>Loading</div>;

  const { pages: allPages } = data;

  return (
    <div class="container mx-auto p-6 font-mono">
      <NewPageForm />

      <PagesTable allPages={allPages} />
    </div>
  );
}
