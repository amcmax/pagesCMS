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
    <div class="object-center w-full max-w-xl">
      <form
        class="bg-white rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(inputs);
          const res = await createPage(data);
          console.log(res);
        }}
      >
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Page Title
            </label>
          </div>

          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="description"
            >
              Description
            </label>
          </div>

          <textarea
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="textarea"
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="url"
            >
              URL
            </label>
          </div>
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="url"
            name="url"
            placeholder="url"
            value={inputs.url}
            onChange={handleChange}
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Page
          </button>
        </div>
      </form>
    </div>
  );
}
