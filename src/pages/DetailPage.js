import addCart from "../utils/addCart";
import { productsData } from "../data/products";
import productFeature from "../components/product-feature";
import axios from "axios";

const DetailPage = {
  async print(id) {
    const { data } = await axios.get(`http://localhost:3001/products/${id}`);
    console.log(data);
    return /* html */ `
      <div class="bg-[#f1f3f6] py-6 px-12">
        <section class="mt-2 shadow border-[1px] text-gray-700 body-font overflow-hidden bg-white">
          <div class="container px-5 py-16 mx-auto">
            <div class="lg:w-4/5 mx-auto flex justify-around flex-wrap">
              <img alt="ecommerce" class="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200" src="${
                data.image
              }">
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${
                  data.name
                }</h1>
                <div class="flex mb-4">
                </div>
                <p class="leading-relaxed">${data.desc}</p>
                <div class="flex mt-6 items-center pb-5 mb-5">
                  <div class="flex items-center">
                    <span class="mr-3 w-[100px]">Size</span>
                    <div class="relative">
                      <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex mt-6 pb-5 mb-5">
                  <span class="mr-3 w-[100px] items-center flex">Quantity</span>
                  <div class="title-font font-medium text-2xl text-gray-900">
                    <div class="flex justify-center ">
                      <svg id="down-quantity" class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
                      <input id="quantity" class="mx-2 border text-center w-8" type="text" value="1">
                      <svg id="up-quantity" class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex mt-6 pb-5 mb-5">
                  <span class="mr-3 w-[100px] flex items-center">Price</span>
                  <span class="title-font font-medium text-2xl text-gray-900 pr-10 pl-3">$${
                    data.price
                  }</span>
                </div>
                <button data-id="${
                  data.id
                }" id="add-btn" class="flex mt-10 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Add cart</button>
              </div>
            </div>
          </div>
        </section>
        <div class="other_products p-4 mt-2 shadow border-[1px] text-gray-700 body-font overflow-hidden bg-white">
          <h2 class="text-2xl border-b-[1px] mx-[-16px] px-6 py-4 font-bold text-gray-900">
            Other products
          </h2>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            ${productFeature.print()}
          </div>
        </div>
        </div>
    `;
  },
  afterRender() {
    addCart();

    const downQuantity = document.getElementById("down-quantity");
    downQuantity.addEventListener("click", () => {
      document.getElementById("quantity").value -= 1;
    });
    const upQuantity = document.getElementById("up-quantity");
    upQuantity.addEventListener("click", () => {
      document.getElementById("quantity").value =
        +document.getElementById("quantity").value + 1;
    });
  },
};

export default DetailPage;
