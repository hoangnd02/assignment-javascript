import Button from "../../../components/Button";
import Table from "../../../components/Table";
import { newsColumns, newsData } from "../../../data/news";

const News = {
  print() {
    return /* html */`
    <div class="mx-6">
      <h2 class="my-6 text-2xl w-full font-semibold text-gray-700 dark:text-gray-200">List news</h2>

      <div class="w-[100px]">
        <a href="/admin/news/add" class="w-[100px]">
          ${Button.print("Add new")}
        </a>  
      </div>
    </div>
      ${Table.print(newsColumns, newsData)}
    `;
  },
};

export default News;
