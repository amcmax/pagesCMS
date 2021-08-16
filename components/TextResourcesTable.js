import MaterialTable from "material-table";

export default function TextResourcesTable({ allElements }) {
  return (
    <div class="container mx-auto p-6">
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div class="w-full">
        <table class="w-full">
          <thead>
            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th class="px-4 py-3">#</th>
              <th class="px-4 py-3">Value</th>
              <th class="px-4 py-3">Type</th>
              <th class="px-4 py-3">Metadata</th>
              <th class="px-4 py3">Edit</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            {allElements.map((element, index) => {
              return (
                <tr class="text-gray-700">
                  <td class="px-4 py-3 border">
                      <p class="font-semibold text-black">{index}</p>
                  </td>
                  <td class="px-4 py-3 border">
                      <p class="font-semibold text-black">{element.value}</p>
                  </td>
                  <td class="px-4 py-3 border">
                      <p class="font-semibold text-black">{element.metadata.type}</p>
                  </td>
                  <td class="px-4 py-3 border">
                      <p class="font-semibold text-black">{element._id}</p>
                  </td>
                  <td class="px-4 py-3 border">
                      <p class="font-semibold text-black">Edit</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}
