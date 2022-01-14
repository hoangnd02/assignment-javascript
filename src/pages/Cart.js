import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";

const Cart = {
  print() {
    return /* html */`
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
            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div class="flex w-2/5">
                <div class="w-20">
                  <img class="h-24" src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="">
                </div>
                <div class="flex flex-col justify-center ml-4 flex-grow">
                  <span class="text-gray-600 font-bold text-base text-center justify-center">Product 1</span>
                </div>
              </div>
              <div class="flex justify-center w-1/5">
                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                </svg>

                <input class="mx-2 border text-center w-8" type="text" value="1">

                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                </svg>
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
              <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
            </div>
            <a href="#" class="flex font-semibold text-indigo-600 text-base mt-10">
              Continue Shopping
            </a>
          </div>
          <div class="w-2/5 px-8 py-10 bg-gray-100">
            <h1 class="text-gray-80 font-semibold text-2xl border-b pb-8">Order Summary</h1>
            ${Form.print(/* html */`
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
};

export default Cart;
