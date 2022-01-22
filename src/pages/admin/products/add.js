import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import fetchApi from "../../../utils/fetchApi";

const addProduct = {
  print() {
    return /* html */`
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Add products</h2>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            ${Form.print(/* html */`
              ${Input.print("text", "Name product", "Name product")}
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
    const formAdd = document.getElementById("form");
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      const product = {
        name: document.getElementById("Name product").value,
        price: document.getElementById("Price product").value,
        des: document.getElementById("Desc").value,
      };
      const data = await fetchApi("https://5e79b4b817314d00161333da.mockapi.io/posts", "POST", product);
      console.log(data);
    });
  },
};

export default addProduct;
