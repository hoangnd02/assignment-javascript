import toastr from "toastr";
import Table from "../../../components/Table";
import userColumns from "../../../data/users";
import reRender from "../../../utils/reRender";
import { getAll, remove } from "../../../api/user";
import EditUser from "./edit";

const Users = {
  async print() {
    const { data } = await getAll();
    return /* html */ `
      <div class="mx-6">
        <h2 class="my-6 text-2xl w-full font-semibold text-gray-700 dark:text-gray-200">List users</h2>
      </div>
      ${Table.print("users", userColumns, data)}
    `;
  },
  afterRender() {
    const delBtn = document.querySelectorAll("#del_btn");
    delBtn.forEach((btn) => {
      btn.addEventListener("click", async function () {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirm) {
          const { id } = this.dataset;
          try {
            await remove(id);
            await reRender(Users, "#page");
            toastr.success("Successfully");
          } catch (error) {
            toastr.error("Error");
          }
        }
      });
    });
  },
};

export { Users, EditUser };
