import Header from "../components/client/Header";

const ClientTemplate = {
  print() {
    return /* html */`
      ${Header.print()}
      <div id="page"></div>
    `;
  },
};

export default ClientTemplate;
