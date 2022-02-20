import toastr from "toastr";
import Table from "../../../components/Table";
import checkoutColumns from "../../../data/checkout";
import reRender from "../../../utils/reRender";
import { getAll, remove } from "../../../api/checkout";

const Checkout = {
  async print() {
    const { data } = await getAll();
    return /* html */ `
    <div class="mx-6">
      <h2 class="my-6 text-2xl w-full font-semibold text-gray-700 dark:text-gray-200">List checkouts</h2>
    </div>
      ${Table.print("checkouts", checkoutColumns, data)}
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
            await reRender(Checkout, "#page");
            toastr.success("Successfully");
          } catch (error) {
            toastr.error("Error");
          }
        }
      });
    });
  },
};

export { Checkout };
