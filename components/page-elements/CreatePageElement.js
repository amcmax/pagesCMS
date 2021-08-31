import useForm from "../../lib/useForm";
import { useMutation, gql } from "@apollo/client";
import { ALL_ELEMENTS_QUERY } from "./PageElements";

const CREATE_PAGE_ELEMENT_MUTATION = gql`
  mutation CREATE_PAGE_ELEMENT_MUTATION($value: String!, $pageId: String!) {
    addTextResource(value: $value, pageId: $pageId) {
      _id
      value
    }
  }
`;

export default function CreatePageElement({ page_id }) {
  const { inputs, handleChange } = useForm({
    value: "Cool",
    pageId: page_id,
    type: "text",
  });

  const [createPageElement, { loading, error, data }] = useMutation(
    CREATE_PAGE_ELEMENT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [ALL_ELEMENTS_QUERY, "pageResources"],
    }
  );

  return (
    <div class="container mx-auto p-6 object-center w-full max-w-xl">
      <form
        class="bg-white rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(inputs);
          const res = await createPageElement(data);
          console.log(res);
        }}
      >
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="type"
            >
              Type
            </label>
          </div>

          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="type"
            name="type"
            placeholder="type"
            value={inputs.type}
            onChange={handleChange}
          />
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="value"
            >
              Value
            </label>
          </div>

          <textarea
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="textarea"
            id="value"
            name="value"
            placeholder="value"
            value={inputs.value}
            onChange={handleChange}
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Text Resource
          </button>
        </div>
      </form>
    </div>
  );
}
