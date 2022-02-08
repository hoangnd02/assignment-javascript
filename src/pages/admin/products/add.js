import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import toastr from "toastr";
import axios from "axios";

const addProduct = {
  print() {
    return /* html */ `
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Add products</h2>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            ${Form.print(/* html */ `
              ${Input.print("text", "Name product", "Name product")}
              ${Input.print("text", "Price product", "Price product")}
              ${Input.print("file", "Photo product", "")}
              ${Input.print("textarea", "Desc", "Desc product")}
              <div class="w-[100px] py-3 text-right">
                ${Button.print("Save")}
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  },
  afterRender() {
    const formAdd = document.getElementById("form");
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      const product = {
        name: document.getElementById("Name product").value,
        price: document.getElementById("Price product").value,
        desc: document.getElementById("Desc").value,
        image: "",
      };
      try {
        await axios.post(
          "https://61ffcacf5e1c4100174f6f70.mockapi.io/products",
          product
        );
        toastr.success("Add product successfully");
      } catch (error) {
        toastr.error(error);
      }
    });
  },
};

export default addProduct;
