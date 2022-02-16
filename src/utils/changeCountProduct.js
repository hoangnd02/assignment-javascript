import ProductCart from "../components/ProductCart";
import getCart from "./getCart";
import reRender from "./reRender";
import totalProduct from "./totalProduct";

const changeCountProduct = () => {
  const actionDown = document.querySelectorAll("#action");
  actionDown.forEach((btn) => {
    const quantityElement = btn.querySelector("#quantity");
    let cartProduct = JSON.parse(localStorage.getItem("cart"));
    if (!cartProduct) cartProduct = [];

    const downQuantity = btn.querySelector("#down-quantity");
    downQuantity.addEventListener("click", async function () {
      const { id } = this.dataset;
      if (+quantityElement.value > 1) {
        const findIdProduct = cartProduct.find((product) => product.id == id);
        findIdProduct.quantity = +quantityElement.value - 1;
        localStorage.setItem("cart", JSON.stringify(cartProduct));
        await reRender(ProductCart, ".list-products");
        totalProduct();
      }
    });
    const upQuantity = btn.querySelector("#up-quantity");
    upQuantity.addEventListener("click", async function () {
      const { id } = this.dataset;
      const findIdProduct = cartProduct.find((product) => product.id == id);
      findIdProduct.quantity = +quantityElement.value + 1;
      localStorage.setItem("cart", JSON.stringify(cartProduct));
      await reRender(ProductCart, ".list-products");
      totalProduct();
    });
  });
};

export default changeCountProduct;
