import axios from "axios";
import addUser from "./add";
import editUser from "./edit";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import { newsColumns } from "../../../data/news";
import toastr from "toastr";
import reRender from "../../../utils/reRender";

const User = {
  async print() {
    const { data } = await axios.get("http://localhost:3001/posts");
    console.log(data);
    return /* html */ `
      <div class="mx-6">
        <h2 class="my-6 text-2xl w-full font-semibold text-gray-700 dark:text-gray-200">List user</h2>
        <div class="w-[100px]">
          <a href="#/admin/user/add" class="w-[100px]">
            ${Button.print("Add new")}
          </a>  
        </div>
      </div>
      ${Table.print("user", userColumns, data)}
    `;
  },
  afterRender() {
    const del_btn = document.querySelectorAll("#del_btn");
    del_btn.forEach((btn) => {
      btn.addEventListener("click", async function () {
        const { id } = this.dataset;
        console.log(id, btn);
        try {
          await axios.delete(`http://localhost:3001/posts/${id}`);
          await reRender(user, "#page");
          toastr.success("Successfully");
        } catch (error) {
          console.log(error);
          toastr.error("Error");
        }
      });
    });
  },
};

export { User, editUser, addUser };
