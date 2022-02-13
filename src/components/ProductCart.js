import axios from "axios";
import changeCountProduct from "../utils/changeCountProduct";
import getCart from "../utils/getCart";
import reRender from "../utils/reRender";

const ProductCart = {
  async print() {
    const cartProduct = getCart();
    const findProduct = [];
    const { data } = await axios.get("http://localhost:3001/products");
    await cartProduct.forEach((product) => {
      const prod = data.find((prodItem) => prodItem.id === +product.id);
      if (prod) {
        prod.quantity = product.quantity;
        findProduct.push(prod);
      }
    });
    return /* html */ `
      ${findProduct
        .map(
          (product) => /* html */ `
        <div data-id="${
          product.id
        }" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5">
            <div class="w-20">
              <img class="h-24" src="${product.image}" alt="">
            </div>
            <div class="flex flex-col justify-center ml-4 flex-grow">
              <span class="text-gray-600 font-bold text-base text-center justify-center">${
                product.name
              }</span>
            </div>
          </div>
          <div id="action" class="flex justify-center w-1/5">
            <svg data-id="${
              product.id
            }" id="down-quantity" class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
            <input id="quantity" class="mx-2 border text-center w-8" type="text" value="${
              product.quantity
            }">
            <svg data-id="${
              product.id
            }" id="up-quantity" class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">$${
            product.price
          }</span>
          <span class="text-center w-1/5 font-semibold text-sm">$${
            +product.price * product.quantity
          }</span>
        </div>
      `
        )
        .join("")}
    `;
  },
  afterRender() {
    changeCountProduct();
  },
};

export default ProductCart;
