import ProductCart from "../components/ProductCart";
import reRender from "./reRender";

const changeCountProduct = () => {
  const actionDown = document.querySelectorAll("#action");
  actionDown.forEach((btn) => {
    const quantityElement = btn.querySelector("#quantity");
    let cartProduct = JSON.parse(localStorage.getItem("cart"));
    if (!cartProduct) cartProduct = [];

    const downQuantity = btn.querySelector("#down-quantity");
    downQuantity.addEventListener("click", async function () {
      const { id } = this.dataset;
      console.log("object");
      if (quantityElement.value > 1) {
        quantityElement.value -= 1;
      }
      const findIdProduct = cartProduct.find((product) => product.id === id);
      findIdProduct.quantity = quantityElement.value;
      localStorage.setItem("cart", JSON.stringify(cartProduct));
      await reRender(ProductCart, ".list-products");
    });
    const upQuantity = btn.querySelector("#up-quantity");
    upQuantity.addEventListener("click", async function () {
      const { id } = this.dataset;
      quantityElement.value = +quantityElement.value + 1;
      const findIdProduct = cartProduct.find((product) => product.id === id);
      findIdProduct.quantity = quantityElement.value;
      localStorage.setItem("cart", JSON.stringify(cartProduct));
      await reRender(ProductCart, ".list-products");
    });
  });
};

export default changeCountProduct;
