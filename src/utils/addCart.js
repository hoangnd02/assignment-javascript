import axios from "axios";
import toastr from "toastr";
import { get } from "../api/products";
import Header from "../components/client/Header";
import reRender from "./reRender";

const addCart = () => {
  const addBtn = document.querySelector("#add-btn");
  const quantityElement = document.querySelector("#quantity");

  addBtn.addEventListener("click", async function () {
    const { id } = this.dataset;
    console.log(quantityElement.value);
    const { data } = await get(id);
    const newProduct = {
      ...data,
      quantity: +quantityElement.value,
    };
    console.log(newProduct);
    let cartProduct = JSON.parse(localStorage.getItem("cart"));
    if (!cartProduct) cartProduct = [];
    const existProduct = cartProduct.find((product) => product.id == id);
    if (!existProduct) {
      cartProduct.push(newProduct);
    } else {
      existProduct.quantity = +quantityElement.value;
    }
    localStorage.setItem("cart", JSON.stringify(cartProduct));
    toastr.success("Add product successfully", "Successfully");
    reRender(Header, "#header");
  });
};

export default addCart;
