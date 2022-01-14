const Column = {
  print(type, value) {
    switch (type) {
    case "text": {
      return /* html */`
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">
              ${value}
            </div>
          </div>
        </td>
      `;
    }

    case "image": {
      return /* html */`
        <td class="px-6 py-4 whitespace-nowrap">
          <img class="w-[120px]" src="${value}"/>
        </td>
      `;
    }

    case "description": {
      return /* html */`
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="min-w-[100px] max-w-[400px] truncate px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
            ${value}
          </span>
        </td>
      `;
    }

    default: {
      return /* html */`
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">
              ${value}
            </div>
          </div>
        </td>
      `;
    }
    }
  },
};

export default Column;
