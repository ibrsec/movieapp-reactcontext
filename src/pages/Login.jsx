import React, { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useAuth } from "../context/AuthProvider";
//testbaba@test.com testbaba
//{email: 'bbb@bbb.com', password: 'bbbbbb'}
//{email: 'ccc@cccc.com', password: 'cccccc'}
//{firstName: 'denemeUsername', lastName: 'denemeUsersurname', email: 'deneme@test.com', password: 'deneme123'}
const Login = () => {
  const { login, googleProvider, forgotPassword } = useAuth();
  const [openPassword, setOpenpassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("loginForm", loginForm);
    login(loginForm);
  };

  return (
    <div className="flex justify-center">
      <div className="overflow-hidden flex-1 h-screen justify-center items-center dark:bg-gray-dark-main">
        <div className={`form-container  mt-[5vh] w-[380px] h-[480px] `}>
          <form onSubmit={handleSubmit}>
            <h2 className="pt-3 text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
              Login
            </h2>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="floating_email"
                className="peer"
                type="email"
                placeholder=" "
                required
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
              />
              <label htmlFor="floating_email">Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="floating_password"
                className="peer"
                type={openPassword ? "text" : "password"}
                placeholder=" "
                required
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
              />
              <label htmlFor="floating_password">Password</label>

              <span
                onClick={() => setOpenpassword(!openPassword)}
                className="absolute right-1 top-2 cursor-pointer text-red-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6"
                >
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div>
              <span
                onClick={() => forgotPassword(loginForm.email)}
                className="text-slate-400 cursor-pointer transition-colors hover:text-slate-200 inline-block"
              >
                {" "}
                Forgot Passsword
              </span>
            </div>
            <button className="btn-danger" type="submit">
              Sign In
            </button>
            <button
              className="flex justify-between text-center items-center btn-danger"
              type="button"
              onClick={() => googleProvider()}
            >
              Continue with Google
              <GoogleIcon color="currentColor" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
