import Navigo from "navigo";
import products from "./products";

const router = new Navigo("/", { linksSelector: "a" });

router.on({
  "/": () => console.log("home page"),
  "/about": () => console.log("about"),
});

router.notFound(() => console.log("not found"));

router.resolve();

const productsElement = document.querySelector(".products");
const activesElement = document.querySelector(".actives");

const productHtml = products.map(
  (product) => `<div class="border border-[#ccc] p-8">
    <img class="w-full" src="${product.image}" alt="">
    <div class="text-[#ca7703] text-[18px] my-2">${product.title}</div>
    <div>${product.content}</div>
  </div>`,
).join("");

productsElement.innerHTML = productHtml;
activesElement.innerHTML = productHtml;
