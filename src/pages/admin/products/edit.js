import axios from "axios";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { productsData } from "../../../data/products";
import fetchApi from "../../../utils/fetchApi";

const editProduct = {
  idProduct: 0,
  async print(id) {
    this.idProduct = id;
    const { data } = await axios.get(
      `https://61ffcacf5e1c4100174f6f70.mockapi.io/products/${id}`
    );
    return /* html */ `
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Edit product</h2>

        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            ${Form.print(/* html */ `
              ${Input.print("text", "Name product", "Name product", data.name)}
              ${Input.print(
                "text",
                "Price product",
                "Price product",
                data.price
              )}
              ${Input.print("file", "Photo product", "", data.image)}
              ${Input.print("textarea", "Desc", "Desc product", data.desc)}
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
        des: document.getElementById("Desc").value,
      };
      const data = await fetchApi(
        `https://5e79b4b817314d00161333da.mockapi.io/posts/${this.idProduct}`,
        "PUT",
        product
      );
      console.log(data);
    });
  },
};

export default editProduct;
