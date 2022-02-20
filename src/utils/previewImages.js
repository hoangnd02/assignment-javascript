const previewImages = (fileImg) => {
  let listImageElement = "";
  // eslint-disable-next-line no-restricted-syntax
  for (const file of fileImg) {
    if (file) {
      const url = URL.createObjectURL(file);
      listImageElement += /* html */ `
          <div class="relative">
            <img src="${url}" id="image" class="image w-[190px] mx-1 h-auto"/>
          </div>
        `;
    }
  }
  document.querySelector(".list-images").innerHTML = listImageElement;
};

export default previewImages;
