import useForm from "../../lib/useForm";
import { useMutation, gql } from "@apollo/client";

const CREATE_PAGE_MUTATION = gql`
  mutation CREATE_PAGE_MUTATION(
    $name: String!
    $url: String!
    $description: String!
  ) {
    addPage(name: $name, url: $url, description: $description) {
      _id
      name
      url
      description
    }
  }
`;

export default function CreatePage() {
  const { inputs, handleChange } = useForm({
    name: "Cool",
    description: "cool",
    url: "/home",
  });

  const [createPage, { loading, error, data }] = useMutation(
    CREATE_PAGE_MUTATION,
    {
      variables: inputs,
    }
  );

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(inputs);
        const res = await createPage(data);
        console.log(res);
      }}
    >
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description">
        Description
        <textarea
          type="textarea"
          id="description"
          name="description"
          placeholder="description"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="url">
        URL
        <input
          type="text"
          id="url"
          name="url"
          placeholder="url"
          value={inputs.url}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Page</button>
    </form>
  );
}
