import { newsData } from "../data/news";

const NewsPage = {
  print() {
    return /* html */`
      <section class="bg-coolGray-100 text-coolGray-800">
        <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a href="#" class="shadow block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-coolGray-50">
            <img src="${newsData[0].img}" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-coolGray-500">
            <div class="p-6 space-y-2 lg:col-span-5">
              <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">${newsData[0].title}</h3>
              <span class="text-xs text-coolGray-600">February 19, 2021</span>
              <p>${newsData[0].desc}</p>
            </div>
          </a>
          <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            ${newsData.map((item) => /* html */`
              <a href="#" class="shadow max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50">
                <img role="presentation" class="object-cover w-full rounded h-44 bg-coolGray-500" src="${item.img}">
                <div class="p-6 space-y-2">
                  <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">${item.title}</h3>
                  <span class="text-xs text-coolGray-600">January 21, 2021</span>
                  <p>${item.desc}</p>
                </div>
              </a>
            `).join("")}
          </div>
          <div class="flex justify-center">
            <button class="px-6 py-3 text-sm rounded-md hover:underline bg-coolGray-50 text-coolGray-600">Load more posts...</button>
          </div>
        </div>
      </section>
    `;
  },
};

export default NewsPage;
