import axios from "axios";
import toastr from "toastr";
import $ from "jquery";
import validate from "jquery-validation";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";

const Signup = {
  print() {
    return /* html */ `
      <div class="min-h-[657px] bg-[url('https://random.imagecdn.app/1400/800')] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="p-10 rounded bg-[#fff] shadow max-w-[540px] w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create a new your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="#/signin" class="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in to your account
              </a>
            </p>
          </div>
          ${Form.print(/* html */ `
            ${Input.print("text", "First name", "First name")}
            ${Input.print("text", "Last name", "Last name")}
            ${Input.print("text", "Email", "Email")}
            ${Input.print("password", "Password", "Password")}
            <div class="py-3 text-right">
              ${Button.print("Sign up")}
            </div>
            <div class="text-sm text-center">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                Back
              </a>
            </div>
          `)}
        </div>
      </div>
    `;
  },
  afterRender() {
    $("#form").validate({
      rules: {
        Email: {
          required: true,
          email: true,
        },
        Password: {
          required: true,
          minlength: 4,
        },
      },
      messages: {},
      submitHandler() {
        async function submit() {
          const newUser = {
            firstName: document.getElementById("First name").value,
            lastName: document.getElementById("Last name").value,
            email: document.getElementById("Email").value,
            password: document.getElementById("Password").value,
          };

          try {
            await axios.post("https://o1d4ks.sse.codesandbox.io/signup", newUser);
            document.location.href = "/";
          } catch (error) {
            toastr.error(error);
          }
        }
        submit();
      },
    });
  },
};

export default Signup;
