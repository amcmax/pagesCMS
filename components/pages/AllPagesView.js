import { gql, useQuery } from "@apollo/client";
import CreatePage from "./CreatePage";
import PagesList from "./PagesList";

export const ALL_PAGES_QUERY = gql`
  query Pages {
    pages {
      _id
      name
      url
    }
  }
`;

export default function AllPagesView() {
  const { loading, error, data } = useQuery(ALL_PAGES_QUERY);

  if (error) return <div>Error loading pages.</div>;
  if (loading) return <div>Loading</div>;

  const { pages: allPages } = data;

  return (
    <div class="container mx-auto p-6 font-mono">
      <CreatePage  />

      <PagesList allPages={allPages}/>
    </div>

  );
}
