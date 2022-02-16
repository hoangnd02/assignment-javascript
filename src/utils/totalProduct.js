import getCart from "./getCart";

const totalProduct = () => {
  const cartProduct = getCart();
  const totalPrice = document.getElementById("total_price");
  const total = Object.keys(cartProduct).reduce(function (previous, key) {
    return previous + cartProduct[key].quantity * cartProduct[key].price;
  }, 0);
  totalPrice.innerHTML = `$${total}`;
};

export default totalProduct;
