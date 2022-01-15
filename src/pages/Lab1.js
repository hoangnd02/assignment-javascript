const Lab1 = {
  print() {
    return /* html */`
      <div class="mx-[120px]">
        <header>
          <div class="bg-[#272f54]">
            <img class="mx-auto" src="./2ce038f594b759e900a6.jpg" alt="">
          </div>
          <ul class="flex bg-[#ca7703] justify-between p-2 text-white">
            <div class="flex">
              <a href="./" class="px-8 hover:text-orange-500">Trang chủ</a>
              <a href="./" class="px-8 hover:text-orange-500">Tuyển sinh</a>
              <a href="./" class="px-8 hover:text-orange-500">Chương trình đào tạo</a>
              <a href="./" class="px-8 hover:text-orange-500">Góc sinh viên</a>
              <a href="./" class="px-8 hover:text-orange-500">Tuyển dụng</a>
            </div>
            <div class="flex">
              <form>
                <input type="text">
                <button class="px-4 bg-[#272f54] border border-white-600" type="submit">Tìm kiếm</button>
              </form>
            </div>
          </ul>
        </header>
        <main>
          <div class="my-2">
            <img class="w-full" src="./3304d1107d52b00ce943.jpg" alt="">
          </div>
          <div class="text-[#272f54] font-bold text-2xl my-4">Tin tức học tập</div>
          <div class="products grid md:grid-cols-3 gap-8"></div>
          <div class="text-[#272f54] font-bold text-2xl my-4">Hoạt động sinh viên</div>
          <div class="actives grid md:grid-cols-3 gap-8"></div>
        </main>
        <footer>
          <div class="bg-[#272f54] text-center py-8 text-[#fff] mt-[20px]">Hoangndph17343</div>
        </footer>
      </div>
    `;
  },
};

export default Lab1;
