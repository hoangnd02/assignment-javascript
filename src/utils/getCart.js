const getCart = () => {
  const cartProducts = JSON.parse(localStorage.getItem("cart"));
  return cartProducts;
};

export default getCart;
