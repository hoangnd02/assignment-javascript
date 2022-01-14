import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { newsData } from "../../../data/news";

const editNews = {
  print(id) {
    const findNews = newsData.find((item) => item.id === id);
    return /* html */`
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Edit news</h2>

        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            ${Form.print(/* html */`
              ${Input.print("text", "Title", "Title new", findNews.title)}
              ${Input.print("file", "Cover photo", "", findNews.img)}
              ${Input.print("textarea", "Content", "Content new", findNews.desc)}
              <div class="w-[100px] py-3 text-right">
                ${Button.print("Save")}
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  },
};

export default editNews;
