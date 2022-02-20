import axios from "axios";
import Swiper from "swiper/bundle";
import productFeature from "../components/product-feature";
// import Swiper bundle with all modules installed

// import styles bundle
import "swiper/css/bundle";
import instance from "../api/config";

const HomePage = {
  print: async () => {
    const { data } = await instance.get("/products?_page=1&_limit=8");
    const newProduct = await axios.get(
      `https://o1d4ks.sse.codesandbox.io/products?_sort=id&_order=asc&_limit=4`,
    );
    return /* html */`
    <div class="bg-[#f1f3f6] py-6">
      <div class="banner max-w-7xl mx-auto">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img class="w-full" src="https://au2-images.shop.samsung.com/medias/2000x600.jpg?context=bWFzdGVyfGltYWdlc3w2MTcyNjF8aW1hZ2UvanBlZ3xoMDYvaDlmLzEyMDg1NjY0MzgzMDA2LzIwMDB4NjAwLmpwZ3wxYjlkNTNhODMzNWU2MGJmYzQ2NTZmZDMwZWY1ZWRlMmUyYzMzOWRjNDM4NDU0MTI2MGI2ZDUyZDExY2YwMjA5"/>
            </div>
            <div class="swiper-slide">
              <img class="w-full" src="https://au2-images.shop.samsung.com/medias/2000x600.jpg?context=bWFzdGVyfGltYWdlc3w3ODIxNzJ8aW1hZ2UvanBlZ3xoODgvaDNhLzEyMTI4NTYxMjMzOTUwLzIwMDB4NjAwLmpwZ3w0OWE1ZWM4ZDcyMTFiYTEwYjI5ODE4OTcwYjUyNDAxYzAxMDAzZTQyYjUyOTU3MGVlNzZkOTNjOTA1MWQ2OWEy"/>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <div class="bg-white mt-6 shadow border-[1px] max-w-2xl mx-auto py-2 px-4 lg:max-w-7xl">
        <h2 class="title text-2xl border-b-[1px] mx-[-16px] px-4 py-4 font-bold text-gray-900">
          New products
        </h2>
        <div class="list-products mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          ${newProduct.data
    .map(
      (product) => /* html */ `
            <div class="group relative z-10">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src="${product.image}" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#/product/${product.id}">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      ${product.name}
                    </a>
                  </h3>
                  <p class="text-sm my-2 font-medium text-gray-900">$${product.price}</p>
                  <p class="mt-1 text-sm text-gray-500">${product.desc}</p>
                </div>
              </div>
            </div>
          `,
    )
    .join("")}
        </div>
      </div>
      <div class="bg-white mt-6 shadow border-[1px] max-w-2xl mx-auto py-2 px-4 lg:max-w-7xl">
        <h2 class="text-2xl border-b-[1px] mx-[-16px] px-4 py-4 font-bold text-gray-900">
          All product
        </h2>
        <div id="all-products" class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          ${await productFeature.print(data)}
        </div>
        <div
          class="grid mt-2 px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 sm:grid-cols-9 dark:text-gray-400"
        >
          <span class="flex items-center col-span-3">
            Showing 1-2 of 2
          </span>
          <span class="col-span-2"></span>
          <!-- Pagination -->
          <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul class="inline-flex items-center">
                <li>
                  <button
                    class="px-3 py-1 w-[50px] rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    id="page-count"
                    data-id="1"
                    class="px-3 py-1 w-[50px] hover:bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-purple"
                  >
                    1
                  </button>
                </li>
                <li>
                  <button
                    id="page-count"
                    data-id="2"
                    class="px-3 py-1 w-[50px] hover:bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-purple"
                  >
                    2
                  </button>
                </li>
                <li>
                  <button
                    class="px-3 py-1 w-[50px] rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  >
                    <svg
                      class="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  `;
  },
  async afterRender() {
    const swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Get page product
    const pageElements = document.querySelectorAll("#page-count");
    pageElements.forEach((element) => {
      element.addEventListener("click", async function () {
        const { id } = this.dataset;
        const { data } = await instance.get(`/products?_page=${id}&_limit=8`);
        document.querySelector("#all-products").innerHTML = productFeature.print(data);
      });
    });
  },
};

export default HomePage;
