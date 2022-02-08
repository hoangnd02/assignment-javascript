import axios from "axios";
import addProduct from "./add";
import editProduct from "./edit";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import { productColumns } from "../../../data/products";
import toastr from "toastr";

const Products = {
  async print() {
    const { data } = await axios.get(
      "https://61ffcacf5e1c4100174f6f70.mockapi.io/products"
    );
    return /* html */ `
      <div class="mx-6">
        <h2 class="my-6 text-2xl w-full font-semibold text-gray-700 dark:text-gray-200">List products</h2>
        <div class="w-[100px]">
          <a href="#/admin/products/add" class="w-[100px]">
            ${Button.print("Add new")}
          </a>  
        </div>
      </div>
      ${Table.print("products", productColumns, data)}
    `;
  },
  afterRender() {
    const del_btn = document.querySelectorAll("#del_btn");
    del_btn.forEach((btn) => {
      console.log(btn);
      btn.addEventListener("click", async function () {
        const { id } = this.dataset;
        console.log(id, btn);
        try {
          await axios.delete(
            `https://61ffcacf5e1c4100174f6f70.mockapi.io/products/${id}`
          );
          toastr.success("Successfully");
        } catch (error) {
          toastr.error("Error");
        }
      });
    });
  },
};

export { Products, editProduct, addProduct };
