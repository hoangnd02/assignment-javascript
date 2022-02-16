const Form = {
  print(slot = "") {
    return /* html */`
      <form id="form" method="POST">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          ${slot}
        </div>
      </form>
    `;
  },
};

export default Form;
