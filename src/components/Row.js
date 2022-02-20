import Column from "./Column";

const Row = {
  print(type, column, data) {
    console.log(column, data);
    return /* html */ `
      <tr>
        ${column
    .map((col) => `${Column.print(col.type, data[col.name])}`)
    .join("")}
        <td class="w-[100px] px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="#/admin/${type}/edit/${
  data.id
}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
        </td>
        <td class="w-[100px] px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button data-id="${
  data.id
}" id="del_btn" class="text-indigo-600 hover:text-indigo-900">Delete</button>
        </td>
      </tr>
    `;
  },
};

export default Row;
