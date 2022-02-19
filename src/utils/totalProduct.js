import getCart from "./getCart";

const totalProduct = () => {
  let total = 0;
  const cartProduct = getCart();
  const totalPrice = document.getElementById("total_price");
  total = Object.keys(cartProduct).reduce(function (previous, key) {
    return previous + cartProduct[key].quantity * cartProduct[key].price;
  }, 0);
  totalPrice.innerHTML = `$${total}`;
};

export default totalProduct;
