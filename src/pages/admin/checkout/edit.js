import toastr from "toastr";
import $ from "jquery";
import { get, update } from "../../../api/checkout";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";

const editCheckout = {
  idCheckout: 0,
  async print(id) {
    this.idCheckout = id;
    const { data } = await get(id);
    const listProducts = JSON.parse(data.products);
    return /* html */ `
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl w-full font-semibold text-gray-700 dark:text-gray-200">Edit checkout</h2>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            ${Form.print(/* html */ `
              ${Input.print("text", "Full name", "Full name", data.name)}
              ${Input.print("text", "Number phone", "Number phone", data.phone)}
              ${Input.print("text", "Email", "Email", data.email)}
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-3">
                  <label for="title" class="block text-sm font-medium text-gray-700">Products</label>
                  ${listProducts.map((product) => /* html */ `
                    <div class="mx-8 my-2">
                      <div data-id="${product.id}" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div class="flex w-2/5">
                          <div class="w-24">
                            <img src="${product.image}" alt="">
                          </div>
                          <div class="flex flex-col justify-center ml-4 flex-grow">
                            <span class="text-gray-600 font-bold text-base text-center justify-center">${product.name}</span>
                          </div>
                        </div>
                        <div id="action" class="flex justify-center w-1/5">
                          <input id="quantity" class="mx-2 text-center w-12" type="text" value="${product.quantity}" disabled>
                        </div>
                        <span class="text-center w-1/5 font-semibold text-sm">$${product.price}</span>
                        <span class="text-center w-1/5 font-semibold text-sm">$${+product.price * product.quantity}</span>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>
              ${Input.print("textarea", "Address", "Address", data.address)}
              ${Input.print("textarea", "Detail address", "Detail address", data.detailAddress)}
              <div class="w-[100px] py-3 text-right">
                ${Button.print("Save")}
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  },
  async afterRender(id) {
    $("#form").validate({
      submitHandler() {
        // eslint-disable-next-line consistent-return
        async function submit() {
          const { data } = await get(id);
          const checkout = {
            name: document.getElementById("Full name").value,
            phone: document.getElementById("Number phone").value,
            email: document.getElementById("Email").value,
            address: document.getElementById("Detail address").value,
            detailAddress: document.getElementById("Detail address").value,
            products: data.products,
          };
          try {
            await update(checkout, id);
            toastr.success("Successfully");
          } catch (error) {
            return error;
          }
        }
        submit();
      },
    });
  },
};

export default editCheckout;
