import MenuList from "../components/admin/MenuList";
import NavbarTop from "../components/admin/NavBarTop";

const AdminTemplate = {
  print() {
    return /* html */`
      <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
        ${MenuList.print()}
        <div class="flex flex-col flex-1 w-full">
          ${NavbarTop.print()}
          <main class="h-full py-6 overflow-y-auto">
            <div id="page"></div>
          </main>
        </div>
      </div>
    `;
  },
};

export default AdminTemplate;
