import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import axios from "axios";
import toastr from "toastr";

const addCategory = {
  print() {
    return /* html */ `
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl w-full font-semibold text-gray-700 dark:text-gray-200">Add category</h2>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            ${Form.print(/* html */ `
              ${Input.print("text", "Title", "Title new")}
              <div class="w-[100px] py-3 text-right">
                ${Button.print("Save")}
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const formAdd = document.getElementById("form");
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();

      const category = {
        title: document.getElementById("Title").value,
      };
      try {
        await axios.post(`http://localhost:3001/categories`, category);
        toastr.success("Successfully");
      } catch (error) {
        console.log(error);
      }
    });
  },
};

export default addCategory;
