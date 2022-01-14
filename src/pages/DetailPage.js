import { productsData } from "../data/products";

const DetailPage = {
  print(id) {
    const findProduct = productsData.find((product) => product.id === id);
    return /* html */`
      <div class="bg-white">
        <section class="text-gray-700 body-font overflow-hidden bg-white">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex justify-around flex-wrap">
              <img alt="ecommerce" class="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200" src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg">
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${findProduct.name}</h1>
                <div class="flex mb-4">
                </div>
                <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                <div class="flex mt-6 items-center pb-5 mb-5">
                  <div class="flex items-center">
                    <span class="mr-3">Size</span>
                    <div class="relative">
                      <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">${findProduct.price}</span>
                </div>
                <button class="flex mt-10 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Add cart</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  },
};

export default DetailPage;
