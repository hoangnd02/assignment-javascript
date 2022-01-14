import Button from "../../../components/Button";
import Table from "../../../components/Table";
import { categoryColumns, categoryData } from "../../../data/categories";

const Category = {
  print() {
    return /* html */`
    <div class="mx-6">
      <h2 class="my-6 text-2xl w-full font-semibold text-gray-700 dark:text-gray-200">List categories</h2>

      <div class="w-[100px]">
        <a href="/admin/products/add" class="w-[100px]">
          ${Button.print("Add new")}
        </a>  
      </div>
    </div>
      ${Table.print(categoryColumns, categoryData)}
    `;
  },
};

export default Category;
