import toastr from "toastr";
import $ from "jquery";
import validate from "jquery-validation";
import { get, update } from "../../../api/user";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";

const EditUser = {
  idUser: 0,
  async print(id) {
    this.idUser = id;
    const { data } = await get(id);
    return /* html */ `
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Edit user</h2>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            ${Form.print(/* html */ `
              ${Input.print("text", "First name", "First name", data.firstName)}
              ${Input.print("text", "Last name", "First name", data.lastName)}
              ${Input.print("text", "Email", "Email", data.email)}
              <div class="col-span-6 sm:col-span-3">
                <label for="category" class="block text-sm font-medium text-gray-700">category</label>
                <select id="Role" name="category" autocomplete="category-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>admin</option>
                  <option>client</option>
                </select>
              </div>
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
    $("#form").validate({
      submitHandler() {
        async function submit() {
          const user = {
            firstName: document.getElementById("First name").value,
            lastName: document.getElementById("Last name").value,
            role: document.getElementById("Role").value,
            email: document.getElementById("Email").value,
          };
          try {
            await update(user, id);
            return toastr.success("Successfully");
          } catch (error) {
            return error;
          }
        }
        submit();
      },
    });
  },
};

export default EditUser;
