import useForm from "../lib/useForm";
import { useMutation, gql } from "@apollo/client";

const CREATE_PAGE_ELEMENT_MUTATION = gql`
  mutation CREATE_PAGE_ELEMENT_MUTATION(
    $value: String!
    $pageId: String!
  ) {
    addTextResource(value: $value, pageId: $pageId) {
      _id
      value
    }
  }
`;

export default function CreatePageElement({page_id}) {

  const { inputs, handleChange } = useForm({
    value: "Cool",
    pageId: page_id,
    type: "text"
  });

  const [createPage, { loading, error, data }] = useMutation(
    CREATE_PAGE_ELEMENT_MUTATION,
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
      <label htmlFor="type">
        Type
        <input
          type="text"
          id="type"
          name="type"
          placeholder="type"
          value={inputs.type}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="value">
        Value
        <textarea
          type="textarea"
          id="value"
          name="value"
          placeholder="value"
          value={inputs.value}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Page Element</button>
    </form>
  );
}
