const NotFound = {
  print() {
    return /* html */`
      <section class="flex items-center h-full p-20 bg-coolGray-50 text-coolGray-800">
        <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div class="max-w-md text-center">
            <h2 class="mb-8 font-extrabold text-9xl text-coolGray-400">
              <span class="sr-only">Error</span>404
            </h2>
            <p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
            <p class="mt-4 mb-8 text-coolGray-600">But dont worry, you can find plenty of other things on our homepage.</p>
            <a href="#" class="px-8 py-3 font-semibold rounded bg-blue-600 text-white">Back to homepage</a>
          </div>
        </div>
      </section>
    `;
  },
};

export default NotFound;
