import axios from "axios";
import toastr from "toastr";
import changeCountProduct from "../utils/changeCountProduct";
import getCart from "../utils/getCart";
import reRender from "../utils/reRender";
import Header from "./client/Header";
import { get, getAll } from "../api/products";
import totalProduct from "../utils/totalProduct";

const ProductCart = {
  async print() {
    let cartProduct = [];
    cartProduct = getCart();
    const findProduct = [];
    const { data } = await getAll();
    console.log(cartProduct);
    if (cartProduct && cartProduct.length > 0) {
      await cartProduct.forEach((product) => {
        const prod = data.find((prodItem) => prodItem.id == product.id);
        if (prod) {
          prod.quantity = product.quantity;
          findProduct.push(prod);
        }
      });
      return /* html */ `
        ${findProduct
    .map(
      (product) => /* html */ `
          <div>
            <div data-id="${
  product.id
}" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div class="flex w-2/5">
                <div class="w-24">
                  <img src="${product.image}" alt="">
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
                <input id="quantity" class="mx-2 text-center w-12" type="text" value="${
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
            <span data-id="${product.id}" id="del_btn">Remove</span>
          </div>
        `,
    )
    .join("")}
      `;
    }
    return "Khong co san pham";
  },
  afterRender() {
    changeCountProduct();

    // delete product cart
    let productCart = [];
    productCart = getCart();
    const delBtnElement = document.querySelectorAll("#del_btn");
    delBtnElement.forEach((element) => {
      element.addEventListener("click", async function () {
        const { id } = this.dataset;
        await get(id);
        const findIndexProduct = productCart.findIndex(
          (product) => product.id == id,
        );
        productCart.splice(findIndexProduct, 1);
        toastr.success("Successfully");
        localStorage.setItem("cart", JSON.stringify(productCart));
        await reRender(ProductCart, ".list-products");
        await reRender(Header, "#header");
        totalProduct();
      });
    });

    const cartProduct = getCart();
    const total = Object.keys(cartProduct).reduce((previous, key) => previous + cartProduct[key].quantity * cartProduct[key].price, 0);
    console.log(total);
  },
};

export default ProductCart;
