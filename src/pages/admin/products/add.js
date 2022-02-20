import toastr from "toastr";
import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import previewImages from "../../../utils/previewImages";
import { add } from "../../../api/products";
import { getAll } from "../../../api/category";

const addProduct = {
  async print() {
    const { data } = await getAll();
    return /* html */ `
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Add products</h2>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            ${Form.print(/* html */ `
              ${Input.print("text", "Name product", "Name product")}
                <div class="col-span-6 sm:col-span-3">
                  <label for="category" class="block text-sm font-medium text-gray-700">category</label>
                  <select id="category" name="category" autocomplete="category-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    ${data.map((item) => /* html */ `
                      <option>${item.title}</option>
                    `).join("")}
                  </select>
                </div>
                ${Input.print("text", "Price product", "Price product")}
                ${Input.print("file", "Photo product", "")}
                ${Input.print("textarea", "Desc", "Desc product")}
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
    const inputElement = document.querySelector("#file-upload");
    let listImgs;

    if (inputElement) {
      inputElement.addEventListener("change", function () {
        previewImages(this.files);
        listImgs = this.files;
      });
    }

    $("#form").validate({
      rules: {
        "Price product": {
          required: true,
          number: true,
        },
      },
      submitHandler() {
        async function submit() {
          const formData = new FormData();
          formData.append("file", listImgs[0]);
          formData.append("upload_preset", "axplfcjl");
          const { data } = await axios({
            url: "https://api.cloudinary.com/v1_1/dqtnuqde5/image/upload",
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-endcoded",
            },
            data: formData,
          });

          const product = {
            name: document.getElementById("Name product").value,
            category: document.getElementById("category").value,
            image: data.secure_url,
            desc: document.getElementById("Desc").value,
            price: document.getElementById("Price product").value,
          };

          try {
            await add(product);
            toastr.success("Add product successfully. Redirect after 2s");
            return setTimeout(() => {
              document.location.href = "/admin/products";
            }, 3000);
          } catch (error) {
            toastr.error("Error");
            return error;
          }
        }
        submit();
      },
    });
  },
};

export default addProduct;
