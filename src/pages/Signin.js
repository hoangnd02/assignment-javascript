import toastr from "toastr";
import $ from "jquery";
import axios from "axios";
import validate from "jquery-validation";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";

const Signin = {
  print() {
    return /* html */ `
      <div class="min-h-full bg-[url('https://random.imagecdn.app/1400/800')] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div class="p-10 rounded bg-[#fff] shadow max-w-[540px] w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="#/signup" class="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>

          ${Form.print(/* html */ `
            ${Input.print("text", "Email", "Email")}
            ${Input.print("password", "Password", "Password")}
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div class="py-3 text-right">
              ${Button.print("Sign in")}
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
        async function login() {
          const user = {
            email: document.getElementById("Email").value,
            password: document.getElementById("Password").value,
          };

          try {
            const { data } = await axios.post(
              "https://o1d4ks.sse.codesandbox.io/signin",
              user,
            );
            localStorage.setItem("user", JSON.stringify(data.user));
            toastr.success(
              "Bạn đã đăng nhập thành công, chờ 3s để chuyển trang",
            );
            setTimeout(() => {
              if (data.user.id === 1) {
                document.location.href = "/#/admin/dashboard";
              } else {
                document.location.href = "/#/";
              }
            }, 3000);
            document.location.href = "/";
          } catch (error) {
            toastr.error(error);
          }
        }
        login();
      },
    });
  },
};

export default Signin;
