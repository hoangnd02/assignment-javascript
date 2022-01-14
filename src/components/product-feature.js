import { productsData } from "../data/products";

const productsElement = productsData.map((product) =>/* html */`
  <div class="group relative z-10">
    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
      <img src="${product.image}" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="/product/${product.id}">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${product.name}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">${product.color}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">${product.price}</p>
    </div>
  </div>
`).join("");

const productFeature = {
  print: () => productsElement,
};

export default productFeature;
