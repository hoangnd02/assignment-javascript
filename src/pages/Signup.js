import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";

const Signup = {
  print() {
    return /* html */`
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="/signin" class="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
          ${Form.print(/* html */`
            ${Input.print("text", "First name", "First name")}
            ${Input.print("text", "Last name", "Last name")}
            ${Input.print("text", "Email", "Email")}
            ${Input.print("text", "Password", "Password")}
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
            </div>
            <div class="py-3 text-right">
              ${Button.print("Sign up")}
            </div>
          `)}
        </div>
      </div>
    `;
  },
};

export default Signup;
