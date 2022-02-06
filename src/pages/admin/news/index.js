import axios from "axios";
import addNews from "./add";
import editNews from "./edit";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import { newsColumns } from "../../../data/news";

const News = {
  async print() {
    const { data } = await axios.get(
      "https://5e79b4b817314d00161333da.mockapi.io/posts"
    );
    return /* html */ `
      <div class="mx-6">
        <h2 class="my-6 text-2xl w-full font-semibold text-gray-700 dark:text-gray-200">List news</h2>
        <div class="w-[100px]">
          <a href="#/admin/news/add" class="w-[100px]">
            ${Button.print("Add new")}
          </a>  
        </div>
      </div>
      ${Table.print("news", newsColumns, data)}
    `;
  },
};

export { News, editNews, addNews };
