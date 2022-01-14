const Input = {
  print(type, title, placeholder = "", value = "") {
    switch (type) {
    case "text": {
      return /* html */`
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-3">
            <label for="title" class="block text-sm font-medium text-gray-700">${title}</label>
            <input type="text" value="${value}" placeholder="${placeholder}" name="${title}" id="${title}" autocomplete="given-name" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">
          </div>
        </div>
      `;
    }

    case "file": {
      return /* html */`
        <div>
          <label class="block text-sm font-medium text-gray-700">
            ${title}
          </label>
          <div class="list-images flex flex-wrap my-2">
            ${value && `<img src="${value}" class="w-[190px] h-auto">`}
          </div>
          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center">
              <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only" multiple>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      `;
    }

    case "textarea": {
      return /* html */`
        <div>
          <label for="${title}" class="block text-sm font-medium text-gray-700">
            ${title}
          </label>
          <div class="mt-1">
            <textarea id="${title}" name="${title}" rows="3" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="${placeholder}">${value}</textarea>
          </div>
        </div>
      `;
    }

    default: {
      return /* html */`
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-3">
            <label for="title" class="block text-sm font-medium text-gray-700">${title}</label>
            <input type="text" value="${value}" name="title" id="title" autocomplete="given-name" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">
          </div>
        </div>
      `;
    }
    }
  },
};

export default Input;
