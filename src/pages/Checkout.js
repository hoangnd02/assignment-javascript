import { get } from "../api/checkout";

const CheckoutPage = {
  async print(id) {
    const { data } = await get(id);
    const listProducts = JSON.parse(data.products);
    return /* html */ `
    <div id="modal" class=" z-50 outline-none focus:outline-none justify-center items-center" id="modal-id">
    <div class="w-[800px] relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
          <h3 class="text-3xl font-semibold">
            Đơn hàng của bạn
          </h3>
        </div>
        <!--body-->
        <div class="relative p-6 flex-auto">
          <p id="name" class="my-4 text-blueGray-500 text-lg leading-relaxed">Name:  ${data.name}</p>
          <p id="phone" class="my-4 text-blueGray-500 text-lg leading-relaxed">Number phone: ${data.phone}</p>
          <p id="email" class="my-4 text-blueGray-500 text-lg leading-relaxed">Email: ${data.email}</p>
          <p id="address" class="my-4 text-blueGray-500 text-lg leading-relaxed">Address:  ${data.address}</p>
          <p id="detailAddress" class="my-4 text-blueGray-500 text-lg leading-relaxed">Detail address: ${data.detailAddress}</p>
          <p id="products" class="my-4 text-blueGray-500 text-lg leading-relaxed">Produdcts:
          <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-3">
            ${listProducts.map((product) => /* html */ `
              <div class="mx-8 my-2">
                <div data-id="${product.id}" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div class="flex w-2/5">
                    <div class="w-24">
                      <img src="${product.image}" alt="">
                    </div>
                    <div class="flex flex-col justify-center ml-4 flex-grow">
                      <span class="text-gray-600 font-bold text-base text-center justify-center">${product.name}</span>
                    </div>
                  </div>
                  <div id="action" class="flex justify-center w-1/5">
                    <input id="quantity" class="mx-2 text-center w-12" type="text" value="${product.quantity}" disabled>
                  </div>
                  <span class="text-center w-1/5 font-semibold text-sm">$${product.price}</span>
                  <span class="text-center w-1/5 font-semibold text-sm">$${+product.price * product.quantity}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
          </p>
        </div>
        <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
          <p class="my-4 text-blueGray-500 text-lg leading-relaxed">
            <a href="#/"> Go to home page</a>
          </p>
        </div>
      </div>
    </div>
  </div>
    `;
  },
};

export default CheckoutPage;
