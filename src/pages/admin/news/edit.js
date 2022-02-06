import axios from "axios";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { newsData } from "../../../data/news";
import fetchApi from "../../../utils/fetchApi";

const editNews = {
  idNews: 0,
  async print(id) {
    this.idNews = id;
    const { data } = await axios.get(
      `https://5e79b4b817314d00161333da.mockapi.io/posts/${id}`
    );
    console.log(data);
    return /* html */ `
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Edit news</h2>

        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            ${Form.print(/* html */ `
              ${Input.print("text", "Title", "Title new", data.title)}
              ${Input.print("file", "Cover photo", "", data.img)}
              ${Input.print("textarea", "Content", "Content new", data.desc)}
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
      const news = {
        title: document.getElementById("Title").value,
        content: document.getElementById("Content").value,
      };
      const data = await fetchApi(
        `https://5e79b4b817314d00161333da.mockapi.io/posts/${this.idNews}`,
        "PUT",
        news
      );
      console.log(data);
    });
  },
};

export default editNews;
