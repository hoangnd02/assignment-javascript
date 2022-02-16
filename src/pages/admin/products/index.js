import addProduct from "./add";
import editProduct from "./edit";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import { productColumns } from "../../../data/products";
import toastr from "toastr";
import reRender from "../../../utils/reRender";
import { getAll, remove } from "../../../api/products";

const Products = {
  async print() {
    const { data } = await getAll();
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
          await remove(id);
          await reRender(Products, "#page");
          toastr.success("Successfully");
        } catch (error) {
          console.log(error);
          toastr.error("Error");
        }
      });
    });
  },
};

export { Products, editProduct, addProduct };
