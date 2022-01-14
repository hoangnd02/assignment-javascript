import Navigo from "navigo";
import About from "./pages/About";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomPage";
import Signin from "./pages/Signin";
import News from "./pages/admin/news";
import Signup from "./pages/Signup";
import Dashboard from "./pages/admin";
import addNews from "./pages/admin/news/add";
import editNews from "./pages/admin/news/edit";
import previewImages from "./utils/previewImages";
import AdminTemplate from "./templates/Admin";
import ClientTemplate from "./templates/Client";
import Products from "./pages/admin/products";
import DefaultTemplate from "./templates/DefaultTemplate";
// import products from "./data/products";
// import products from "./products";
// import MenuList from "./components/MenuList";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content, page, data) => {
  document.querySelector("#app").innerHTML = page.print();
  document.querySelector("#page").innerHTML = content.print(data.data?.id);
};

router.on({
  "/": (data) => {
    render(HomePage, ClientTemplate, data);
  },
  "/product/:id": (data) => {
    render(DetailPage, ClientTemplate, data);
  },
  "/about": (data) => {
    render(About, ClientTemplate, data);
  },
  "/signin": (data) => {
    render(Signin, DefaultTemplate, data);
  },
  "/signup": (data) => {
    render(Signup, DefaultTemplate, data);
  },
  "/admin": (data) => {
    render(Dashboard, AdminTemplate, data);
  },
  "/admin/products": (data) => {
    render(Products, AdminTemplate, data);
    previewImages();
  },
  "/admin/news": (data) => {
    render(News, AdminTemplate, data);
    previewImages();
  },
  "/admin/news/add": (data) => {
    render(addNews, AdminTemplate, data);
    previewImages();
  },
  "/admin/news/edit/:id": (data) => {
    render(editNews, AdminTemplate, data);
    previewImages();
  },
});

// const productsElement = document.querySelector(".products");
// const activesElement = document.querySelector(".actives");

// const productHtml = products.map(
//   (product) => `<div class="border border-[#ccc] p-8">
//     <img class="w-full" src="${product.image}" alt="">
//     <div class="text-[#ca7703] text-[18px] my-2">${product.title}</div>
//     <div>${product.content}</div>
//   </div>`,
// ).join("");

// productsElement.innerHTML = productHtml;
// activesElement.innerHTML = productHtml;

router.notFound(() => console.log("not found"));

router.resolve();
