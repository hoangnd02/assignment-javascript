const addCart = () => {
  const addBtn = document.querySelector("#add-btn");

  const quantityElement = document.querySelector("#quantity");
  let quantity = 1;
  quantityElement.addEventListener("change", () => {
    quantity = quantityElement.value;
  });
  addBtn.addEventListener("click", function () {
    const { id } = this.dataset;
    const newProduct = {
      id,
      quantity,
    };
    let cartProduct = JSON.parse(localStorage.getItem("cart"));
    if (!cartProduct) cartProduct = [];
    const checkProduct = cartProduct.find((product) => product.id === id);
    if (!checkProduct) {
      cartProduct.push(newProduct);
      localStorage.setItem("cart", JSON.stringify(cartProduct));
    }
  });
};

export default addCart;
