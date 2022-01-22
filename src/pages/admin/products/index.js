import addProduct from "./add";
import editProduct from "./edit";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import { productColumns, productsData } from "../../../data/products";

const Products = {
  print() {
    return /* html */`
      <div class="mx-6">
        <h2 class="my-6 text-2xl w-full font-semibold text-gray-700 dark:text-gray-200">List products</h2>

        <div class="w-[100px]">
          <a href="/admin/products/add" class="w-[100px]">
            ${Button.print("Add new")}
          </a>  
        </div>
      </div>
      ${Table.print(productColumns, productsData)}
    `;
  },
};

export { Products, editProduct, addProduct };
