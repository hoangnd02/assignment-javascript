import Column from "./Column";

const Row = {
  print(column, data) {
    return /* html */`
      <tr>
        ${column.map((col) => `${Column.print(col.type, data[col.name])}`).join("")}
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="/admin/news/edit/${data.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="/admin/news/edit/${data.id}" class="text-indigo-600 hover:text-indigo-900">Delete</a>
        </td>
      </tr>
    `;
  },
};

export default Row;
