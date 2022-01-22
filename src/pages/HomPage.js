import productFeature from "../components/product-feature";

const HomePage = {
  print: () => `
    <div class="bg-[#f1f3f6] py-6">
      <div class="banner mx-8">
        <img class="w-full" src="/696530b4a7fce224389b4754eb9cd57c88bfc148c6010602030af513.jpg"/>
      </div>
      <div class="bg-white mt-6 shadow border-[1px] max-w-2xl mx-auto py-2 px-4 lg:max-w-7xl">
        <h2 class="text-2xl border-b-[1px] mx-[-16px] px-4 py-4 font-bold text-gray-900">
          News product
        </h2>
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          ${productFeature.print()}
        </div>
      </div>
      <div class="bg-white mt-6 shadow border-[1px] max-w-2xl mx-auto py-2 px-4 lg:max-w-7xl">
        <h2 class="text-2xl border-b-[1px] mx-[-16px] px-4 py-4 font-bold text-gray-900">
          All product
        </h2>
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          ${productFeature.print()}
        </div>
      </div>
    </div>
  `,
};

export default HomePage;
