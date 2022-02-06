import Navigo from "navigo";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NewsPage from "./pages/News";
import Dashboard from "./pages/admin";
import HomePage from "./pages/HomPage";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";
import { News, editNews, addNews } from "./pages/admin/news";
import { Products, addProduct, editProduct } from "./pages/admin/products";
import { ClientTemplate, AdminTemplate, DefaultTemplate } from "./templates";
import { Category, addCategory, editCategory } from "./pages/admin/categories";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = async (content, page, data = null) => {
  document.querySelector("#app").innerHTML = page.print();
  if (page.afterRender) page.afterRender();

  document.querySelector("#page").innerHTML = await content.print(data?.id);
  if (content.afterRender) await content.afterRender();
};

router.on({
  "/": () => render(HomePage, ClientTemplate),
  "/cart": () => render(Cart, ClientTemplate),
  "/about": () => render(About, ClientTemplate),
  "/news": () => render(NewsPage, ClientTemplate),
  "/signin": () => render(Signin, DefaultTemplate),
  "/signup": () => render(Signup, DefaultTemplate),
  "/product/:id": ({ data }) => render(DetailPage, ClientTemplate, data),
  "/admin": () => render(Dashboard, AdminTemplate),
  "/admin/categories": () => render(Category, AdminTemplate),
  "/admin/categories/add": () => render(addCategory, AdminTemplate),
  "/admin/categories/edit/:id": ({ data }) => render(editCategory, AdminTemplate, data),
  "/admin/products": () => render(Products, AdminTemplate),
  "/admin/products/add": () => render(addProduct, AdminTemplate),
  "/admin/products/edit/:id": ({ data }) => render(editProduct, AdminTemplate, data),
  "/admin/news": () => render(News, AdminTemplate),
  "/admin/news/add": () => render(addNews, AdminTemplate),
  "/admin/news/edit/:id": ({ data }) => render(editNews, AdminTemplate, data),
});

router.notFound(() => render(NotFound, ClientTemplate));

router.resolve();
