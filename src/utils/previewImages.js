const previewImages = () => {
  const inputElement = document.querySelector("#file-upload");

  function handleFiles() {
    let listImageElement = "";
    // eslint-disable-next-line no-restricted-syntax
    for (const file of this.files) {
      if (file) {
        const url = URL.createObjectURL(file);
        listImageElement += /* html */`
          <div class="relative">
            <img src="${url}" class="w-[190px] mx-1 h-auto"/>
          </div>
        `;
      }
    }
    document.querySelector(".list-images").innerHTML = listImageElement;
  }
  if (inputElement) {
    inputElement.addEventListener("change", handleFiles, false);
  }
};

export default previewImages;
