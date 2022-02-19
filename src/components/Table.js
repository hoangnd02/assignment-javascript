import Row from "./Row";

const Table = {
  print(type, column, data) {
    let keys = [];
    if (data.length > 0) {
      keys = Object.keys(data[0]);
    }
    return /* html */ `
      <div class="py-[20px] px-8 flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-6">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  ${column
                    .map(
                      (key) => /* html */ `
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ${key.name}
                    </th>
                  `
                    )
                    .join("")}
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                    <span class="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                ${data
                  .map((item) => `${Row.print(type, column, item)}`)
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
  },
};

export default Table;
