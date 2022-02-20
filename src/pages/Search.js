import axios from "axios";
import { getAll } from "../api/category";
import productList from "../components/ProductList";

const Search = {
  print: async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const { data } = await axios.get(
      `https://o1d4ks.sse.codesandbox.io/products?q=${urlParams.get("q")}`,
    );
    const categories = await getAll();
    return `
			<div class="flex px-8 bg-[#f1f3f6] py-6">
				<div class="bg-white mt-6 shadow border-[1px] w-1/5 h-[300px] max-w-1xl mx-auto py-2 px-8 lg:max-w-4xl">
					<fieldset>
						<h2 class="text-2xl border-b-[1px] mx-[-16px] px-4 py-4 font-bold text-gray-900">
							Filter
						</h2>
						<div class="mt-4 space-y-4">
						${categories.data
    .map(
      (category) => `
								<div class="flex items-center">
									<input id="category" value="${category.title}" name="category" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
									<label for="category" class="ml-3 block text-sm font-medium text-gray-700">${category.title}</label>
								</div>`,
    )
    .join("")}
						</div>
					</fieldset>
				</div>
				<div class="bg-white mt-6 shadow border-[1px] w-4/5 max-w-2xl mx-auto py-2 px-4 lg:max-w-7xl">
						<h2 class="text-2xl border-b-[1px] mx-[-16px] px-4 py-4 font-bold text-gray-900">
						Search:  ${urlParams.get("q")}
						</h2>
						<div id="product_filter" class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
							${productList.print(data)}
						</div>
				</div>
			</div>
    `;
  },
  afterRender() {
    const filterElements = document.querySelectorAll("#category");
    filterElements.forEach((element) => {
      element.addEventListener("change", async (e) => {
        const urlParams = new URLSearchParams(window.location.search);
        const { data } = await axios.get(
          `https://o1d4ks.sse.codesandbox.io/products?category=${
            e.target.value
          }&q=${urlParams.get("q")}`,
        );
        const productFilter = document.querySelector("#product_filter");
        productFilter.innerHTML = productList.print(data);
      });
    });
  },
};
export default Search;
