import news from "../data/news";

const Row = {
  print() {
    return news.map((row) => /* html */`
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${row.id}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">
              ${row.title}
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <img class="w-[100px]" src="${row.img}"/>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="w-[400px] truncate px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
            ${row.desc}
          </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="/admin/news/edit/${row.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
        </td>
      </tr>
    `).join("");
  },
};

export default Row;
