import Button from "../../../components/Button";
import Table from "../../../components/Table";
import { productColumns, productsData } from "../../../data/products";

const Products = {
  print() {
    return /* html */`
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          <nav aria-label="Breadcrumb">
            <ol role="list" class="max-w-2xl mx-auto flex items-center space-x-2 lg:max-w-7xl ">
              <li>
                <div class="flex items-center">
                  <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                    News
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </h2>
      </div>
      <div class="w-[100px] mx-10">
        ${Button.print("Add new")}
      </div>
      ${Table.print(productColumns, productsData)}
    `;
  },
};

export default Products;
