import Footer from "../components/client/Footer";
import Header from "../components/client/Header";

const ClientTemplate = {
  print() {
    return /* html */`
      ${Header.print()}
      <div id="page"></div>
      ${Footer.print()}
    `;
  },
};

export default ClientTemplate;