const Button = {
  print(content) {
    return /* html */`
      <button type="submit" class="w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple">
        ${content}
      </button>
    `;
  },
};

export default Button;
