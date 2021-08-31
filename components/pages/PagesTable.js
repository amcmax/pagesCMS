export default function PagesTable({ allPages }) {
  return (
    <div class="container mx-auto p-6">
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div class="w-full">
          <table class="w-full">
            <thead>
              <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th class="px-4 py-3">Name</th>
                <th class="px-4 py-3">Elements</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              {allPages.map((page) => {
                return (
                  <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                      <a href={`/${encodeURIComponent(page.url)}`}>
                        <p class="font-semibold text-black">{page.name}</p>
                      </a>
                    </td>
                    <td class="px-4 py-3 border">
                      <a href={`/${encodeURIComponent(page.url)}`}>
                        <p class="font-semibold text-black">
                          {page.elementsCount}
                        </p>
                      </a>
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
