import Footer from "../components/client/Footer";
import Header from "../components/client/Header";

const ClientTemplate = {
  print() {
    return /* html */ `
      <div id="header">
        ${Header.print()}
      </div>
      <div id="page"></div>
      ${Footer.print()}
    `;
  },
  afterRender() {
    Header.afterRender();
  },
};

export default ClientTemplate;
