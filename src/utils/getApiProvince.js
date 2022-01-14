/* eslint-disable no-unused-vars */
const getApiProvince = () => {
  async function fetchMovies1() {
    const response = await fetch("https://provinces.open-api.vn/api/");
    const data = await response.json();
    const select = document.getElementById("Province");
    const myMap = new Map();
    data.map((x) => myMap.set(x.name, x.code));

    let html = "";
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of myMap.entries()) {
      html += `<option value="${entry[1]}">${entry[0]}</option>`;
    }
    select.innerHTML = html;
  }
  async function fetchMovies2() {
    // eslint-disable-next-line camelcase
    const code_d = document.getElementById("Province").value;
    const response = await fetch(
      // eslint-disable-next-line camelcase
      `https://provinces.open-api.vn/api/p/${code_d}?depth=2`,
    );
    const data = await response.json();
    const select = document.getElementById("City");
    const myMap = new Map();
    data.districts.map((x) => myMap.set(x.name, x.code));
    let html = "";
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of myMap.entries()) {
      html += `<option value="${entry[1]}">${entry[0]}</option>`;
    }
    select.innerHTML = html;
  }
  async function fetchMovies3() {
    // eslint-disable-next-line camelcase
    const code_w = document.getElementById("City").value;
    const response = await fetch(
      // eslint-disable-next-line camelcase
      `https://provinces.open-api.vn/api/d/${code_w}?depth=2`,
    );
    const data = await response.json();
    const select = document.getElementById("District");
    const myMap = new Map();
    data.wards.map((x) => myMap.set(x.name, x.code));
    let html = "";
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of myMap.entries()) {
      html += `<option value="${entry[1]}">${entry[0]}</option>`;
    }
    select.innerHTML = html;
  }

  fetchMovies1();
  document.getElementById("Province").addEventListener("change", fetchMovies2, false);
  document.getElementById("City").addEventListener("change", fetchMovies3, false);
};

export default getApiProvince;
