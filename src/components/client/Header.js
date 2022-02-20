import axios from "axios";
import toastr from "toastr";
import getCart from "../../utils/getCart";
import reRender from "../../utils/reRender";
import productList from "../ProductList";

const Header = {
  print() {
    return /* html */ `
    <div>
      <header class="relative bg-[#2874f0] z-20">
        <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="">
            <div class="h-16 flex items-center">
              <!-- Logo -->
              <div class="ml-4 flex lg:ml-0">
                <a href="/#">
                  <span class="sr-only">Workflow</span>
                  <img class="h-8 w-auto" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="">
                </a>
              </div>

              <!-- Flyout menus -->
              <div class="hidden lg:ml-8 lg:block lg:self-stretch">
                <div class="h-full flex space-x-8">
                  <a href="/admin" class="flex items-center text-sm font-medium text-white hover:text-white">Admin</a>
                  <a href="/checkout" class="flex items-center text-sm font-medium text-white hover:text-white">Check out</a>
                  <a href="/news" class="flex items-center text-sm font-medium text-white hover:text-white">News</a>
                </div>
              </div>

              <div class="ml-auto flex items-center">
              
                <!-- Search -->
                <form id="search_form" class="flex lg:ml-6 mr-20">
                  <input id="input_search" class="outline-none px-4 w-[300px]"/>
                  <button id="btn_search" type="submit" class="relative right-[40px] p-2 text-gray-400 hover:text-gray-500">
                    <svg class="w-6 h-6 text-[#2874f0]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>

                ${
  localStorage.getItem("user")
    ? `<div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                          <div id="account-email" class="text-sm font-medium text-white">Hoang</div>
                          <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                          <div id="logout" class="text-sm font-medium text-white">Logout</div>
                      </div>`
    : `<div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                        <a href="/signin" class="text-sm font-medium text-white">Sign in</a>
                        <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                        <a href="/signup" class="text-sm font-medium text-white">Create account</a>
                      </div>`
}

                <!-- Cart -->
                <div class="ml-4 flow-root lg:ml-6">
                  <a href="#/cart" class="group -m-2 p-2 flex items-center">
                    <svg class="text-white flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span class="count-cart ml-2 text-sm font-medium text-white">0</span>
                    <span class="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div class="bg-white h-[30px] flex px-14" style="box-shadow: 0 1px 1px 0 rgb(0 0 0 / 16%); border-bottom: 1px solid #e4e7ed;">
        <div data-id="Smart phone" class="nav-product py-1 text-[#212121] px-4 hover:text-[#2874f0]" style="font-weight:500; font-size:14px;">Smart phone</div>
        <div data-id="Tablet" class="nav-product py-1 text-[#212121] px-4 hover:text-[#2874f0]" style="font-weight:500; font-size:14px;">Tablet</div>
        <div data-id="Watch" class="nav-product py-1 text-[#212121] px-4 hover:text-[#2874f0]" style="font-weight:500; font-size:14px;">Watch</div>
        <div data-id="Accessory" class="nav-product py-1 text-[#212121] px-4 hover:text-[#2874f0]" style="font-weight:500; font-size:14px;">Accessory</div>
      </div>
    </div> 
    `;
  },

  afterRender() {
    const productCart = getCart();
    const countCart = productCart === null ? 0 : productCart.length;
    if (countCart) document.querySelector(".count-cart").innerHTML = countCart;

    const user = JSON.parse(localStorage.getItem("user"));
    const logout = document.querySelector("#logout");
    console.log(user);

    if (user) {
      document.querySelector("#account-email").innerHTML = user.email;
    }
    // logout
    if (logout) {
      logout.addEventListener("click", () => {
        toastr.success("Logout thành công");
        localStorage.removeItem("user");
        reRender(Header, "#header");
      });
    }

    // Search
    const inputSearchElement = document.querySelector("#input_search");
    const form = document.querySelector("#search_form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      document.location.href = `/search?q=${inputSearchElement.value}`;
    });

    // Nav products
    const navProduct = document.querySelectorAll(".nav-product");
    navProduct.forEach((nav) => {
      nav.addEventListener("click", async function () {
        const { id } = this.dataset;
        const { data } = await axios.get(
          `https://o1d4ks.sse.codesandbox.io/products?category=${id}`,
        );
        const productFilter = document.querySelector(".list-products");
        productFilter.innerHTML = productList.print(data);
        document.querySelector(".title").innerHTML = id;
      });
    });
  },
};

export default Header;
