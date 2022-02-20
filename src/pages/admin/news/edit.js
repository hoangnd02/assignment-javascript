import axios from "axios";
import toastr from "toastr";
import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
import { get, update } from "../../../api/post";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import previewImages from "../../../utils/previewImages";

const editNews = {
  idNews: 0,
  async print(id) {
    this.idNews = id;
    const { data } = await get(id);
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
  afterRender(id) {
    const inputElement = document.querySelector("#file-upload");
    let listImgs;

    if (inputElement) {
      inputElement.addEventListener("change", function () {
        previewImages(this.files);
        listImgs = this.files;
      });
    }

    $("#form").validate({
      submitHandler() {
        async function submit() {
          let image;

          if (listImgs) {
            const formData = new FormData();
            formData.append("file", listImgs[0]);
            formData.append("upload_preset", "axplfcjl");
            try {
              const { data } = await axios({
                url: "https://api.cloudinary.com/v1_1/dqtnuqde5/image/upload",
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-endcoded",
                },
                data: formData,
              });
              image = data.secure_url;
            } catch (error) {
              console.log(error);
            }
          }

          const news = {
            title: document.getElementById("Title").value,
            img: image || document.querySelector("#image").src,
            desc: document.getElementById("Content").value,
          };
          try {
            await update(news, id);
            toastr.success("Successfully");
          } catch (error) {
            console.log(error);
          }
        }
        submit();
      },
    });
  },
};

export default editNews;
