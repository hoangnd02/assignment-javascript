const addCart = (product) => {
  document.getElementById("add-btn").addEventListener("click", () => {
    localStorage.setItem("cart", [product]);
  });
};

export default addCart;
