import axios from "axios";
import toastr from "toastr";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import fetchApi from "../../../utils/fetchApi";
import previewImages from "../../../utils/previewImages";

const editUser = {
  iduser: 0,
  async print(id) {
    this.iduser = id;
    const { data } = await axios.get(`http://localhost:3001/posts/${id}`);
    console.log(data);
    return /* html */ `
      <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Edit user</h2>

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
    const inputElement = document.querySelector("#file-upload");
    let listImgs;

    if (inputElement) {
      inputElement.addEventListener("change", handleFiles);
      function handleFiles() {
        previewImages(this.files);
        listImgs = this.files;
      }
    }

    const formAdd = document.getElementById("form");
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
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

      const user = {
        title: document.getElementById("Title").value,
        img: image ? image : document.querySelector("#image").src,
        desc: document.getElementById("Content").value,
      };
      try {
        await axios.put(`http://localhost:3001/posts/${this.iduser}`, user);
        console.log("object");
        toastr.success("Successfully");
      } catch (error) {
        console.log(error);
      }
    });
  },
};

export default editUser;
