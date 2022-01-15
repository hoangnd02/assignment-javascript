import Navigo from "navigo";
import About from "./pages/About";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomPage";
import Signin from "./pages/Signin";
import News from "./pages/admin/news";
import Signup from "./pages/Signup";
import Dashboard from "./pages/admin";
import addProduct from "./pages/admin/products/add";
import editProduct from "./pages/admin/products/edit";
import addNews from "./pages/admin/news/add";
import editNews from "./pages/admin/news/edit";
import previewImages from "./utils/previewImages";
import AdminTemplate from "./templates/Admin";
import ClientTemplate from "./templates/Client";
import Products from "./pages/admin/products";
import DefaultTemplate from "./templates/DefaultTemplate";
import Cart from "./pages/Cart";
import Lab1 from "./pages/Lab1";
import getApiProvince from "./utils/getApiProvince";
import NotFound from "./pages/NotFound";
import NewsPage from "./pages/News";
import Category from "./pages/admin/categories";
import addCategory from "./pages/admin/categories/add";
import editCategory from "./pages/admin/categories/edit";
import productsLab1 from "./products";

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
  "/news": (data) => {
    render(NewsPage, ClientTemplate, data);
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
  "/cart": (data) => {
    render(Cart, ClientTemplate, data);
    getApiProvince();
  },
  "/admin": (data) => {
    render(Dashboard, AdminTemplate, data);
  },
  "/admin/categories": (data) => {
    render(Category, AdminTemplate, data);
  },
  "/admin/categories/add": (data) => {
    render(addCategory, AdminTemplate, data);
    previewImages();
  },
  "/admin/categories/edit/:id": (data) => {
    render(editCategory, AdminTemplate, data);
    previewImages();
  },
  "/admin/products": (data) => {
    render(Products, AdminTemplate, data);
  },
  "/admin/products/add": (data) => {
    render(addProduct, AdminTemplate, data);
    previewImages();
  },
  "/admin/products/edit/:id": (data) => {
    render(editProduct, AdminTemplate, data);
    previewImages();
  },
  "/admin/news": (data) => {
    render(News, AdminTemplate, data);
  },
  "/admin/news/add": (data) => {
    render(addNews, AdminTemplate, data);
    previewImages();
  },
  "/admin/news/edit/:id": (data) => {
    render(editNews, AdminTemplate, data);
    previewImages();
  },
  "/lab1": () => {
    const app = document.querySelector("#app");

    const productHtml = productsLab1.map(
      (product) => `<div class="border border-[#ccc] p-8">
        <img class="w-full" src="${product.image}" alt="">
        <div class="text-[#ca7703] text-[18px] my-2">${product.title}</div>
        <div>${product.content}</div>
      </div>`,
    ).join("");

    app.innerHTML = Lab1.print();

    const productsElement = document.querySelector(".products");
    const activesElement = document.querySelector(".actives");

    productsElement.innerHTML = productHtml;
    activesElement.innerHTML = productHtml;
  },
});

router.notFound((data) => render(NotFound, ClientTemplate, data));

router.resolve();
