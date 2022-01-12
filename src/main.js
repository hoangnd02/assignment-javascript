import Navigo from "navigo";
import Header from "./components/Header";
import About from "./pages/About";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomPage";
import Signin from "./pages/Signin";
import News from "./pages/admin/news";
import Signup from "./pages/Signup";
import Dashboard from "./pages/admin";
import addNews from "./pages/admin/news/add";
import editNews from "./pages/admin/news/edit";
// import MenuList from "./components/MenuList";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content, data) => {
  if (data?.url?.split("/")[0] !== "admin") {
    document.querySelector("#header").innerHTML = Header.print();
  } else {
    document.querySelector("#header").innerHTML = "";
  }
  document.querySelector("#app").innerHTML = content.print(data.data?.id);
};

router.on({
  "/": (data) => {
    render(HomePage, data);
  },
  "/product/:id": (data) => {
    render(DetailPage, data);
  },
  "/about": (data) => {
    render(About, data);
  },
  "/signin": (data) => {
    render(Signin, data);
  },
  "/signup": (data) => {
    render(Signup, data);
  },
  "/admin": (data) => {
    render(Dashboard, data);
  },
  "/admin/news": (data) => {
    render(News, data);
  },
  "/admin/news/add": (data) => {
    render(addNews, data);
  },
  "/admin/news/edit/:id": (data) => {
    render(editNews, data);
  },
});

router.notFound(() => console.log("not found"));

router.resolve();
