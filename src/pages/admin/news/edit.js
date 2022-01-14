import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { newsData } from "../../../data/news";

const editNews = {
  print(id) {
    const findNews = newsData.find((item) => item.id === id);
    return /* html */`
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          <nav aria-label="Breadcrumb">
            <ol role="list" class="max-w-2xl mx-auto flex items-center space-x-2 lg:max-w-7xl ">
              <li>
                <div class="flex items-center">
                  <a href="/admin/news" class="mr-2 text-sm font-medium text-gray-900">
                    News
                  </a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"></path>
                  </svg>
                </div>
              </li>
              <li class="text-sm">
                <a href="/admin/news/edit${findNews.id}" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
                  Edit
                </a>
              </li>
            </ol>
          </nav>
        </h2>
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
