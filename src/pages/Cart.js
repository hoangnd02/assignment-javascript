import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import ProductCart from "../components/ProductCart";
import changeCountProduct from "../utils/changeCountProduct";
import getApiProvince from "../utils/getApiProvince";

const Cart = {
  async print() {
    return /* html */ `
      <div class="container mx-auto mt-10">
        <div class="flex my-10">
          <div class="w-3/5 bg-white px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="text-gray-80 font-semibold text-2xl">Shopping Cart</h1>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            <div class="list-products">${await ProductCart.print()}</div>
            <a href="#" class="flex font-semibold text-indigo-600 text-base mt-10">
              Continue Shopping
            </a>
          </div>
          <div class="w-2/5 px-8 py-10 bg-gray-50">
            <h1 class="text-gray-80 font-semibold text-2xl border-b pb-8">Order Summary</h1>
            ${Form.print(/* html */ `
              ${Input.print("text", "Full name", "Full name")}
              ${Input.print("text", "Number phone", "Number phone")}
              ${Input.print("select", "Province", "Province")}
              ${Input.print("select", "City", "City")}
              ${Input.print("select", "District", "District")}
              ${Input.print("textarea", "Detail address", "Address")}
              <div class="mt-8">
                <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>$600</span>
                </div>
                ${Button.print("Check out")}
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  },
  afterRender() {
    getApiProvince();
    changeCountProduct();
    ProductCart.afterRender();
  },
};

export default Cart;
