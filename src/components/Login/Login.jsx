/*import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  let { userlogin, setuserlogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [ApiError, setApiError] = useState("");
  const [loading, setloading] = useState(false);
  function handleLogin(values) {
    setloading(true);
    axios
      .post("https:ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then((res) => {
        setloading(false);
        if (res.data.message == "success") {
          localStorage.setItem("userToken", res.data.token);
          setuserlogin(res.data.token);
          navigate("/");
        }
      })
      .catch((res) => {
        setloading(false);
        setApiError(res.response.data.message);
      });
  }

  let myValidate = Yup.object().shape({
    email: Yup.string().email("invalid email").required("email is required"),

    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{6,10}$/,
        "password should be between 6 and 10 charactar"
      )
      .required("password is required"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",

      password: "",
    },
    validationSchema: myValidate,
    onSubmit: handleLogin,
  });

  return (
    <>
      {ApiError ? (
        <h3 className="w-1/2 mx-auto bg-red-600 text-white font-bold rounded-lg p-3">
          {ApiError}
        </h3>
      ) : null}
      <div className="my-5">
        <h2 className="font-bold text-2xl text-emerald-600 mb-3">Login</h2>
        <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              type="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-emerald-600 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
            />
            <label
              htmlFor=""
              for="email"
              className=" left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Email
            </label>
            {formik.errors.email && formik.touched.email ? (
              <span className="text-red-500">{formik.errors.email}</span>
            ) : null}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              type="text"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-emerald-600 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className=" left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Password
            </label>
            {formik.errors.password && formik.touched.password ? (
              <span className="text-red-500">{formik.errors.password}</span>
            ) : null}
          </div>

          <div className="flex gap-4 items-center">
            <button
              type="submit"
              className="text-white bg-emerald-600 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-600 dark:focus:ring-emerald-600"
            >
              {loading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
            </button>
            <Link to={"/register"}>
              <span className="text-blue-600 underline">
                do not you have an account? Register Now
              </span>
            </Link>
          </div>
        </form>
        <Link to={"/forgetpassword"}>
          <span className="text-blue-600 underline">Forget Password</span>
        </Link>
      </div>
    </>
  );
}*/
import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  let { userlogin, setuserlogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [ApiError, setApiError] = useState("");
  const [loading, setloading] = useState(false);

  function handleLogin(values) {
    setloading(true);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values) // تصحيح عنوان الـ API
      .then((res) => {
        setloading(false);
        if (res.data.message === "success") {
          localStorage.setItem("userToken", res.data.token);
          setuserlogin(res.data.token);
          navigate("/");
        }
      })
      .catch((res) => {
        setloading(false);
        setApiError(res.response.data.message);
      });
  }

  let myValidate = Yup.object().shape({
    email: Yup.string().email("invalid email").required("email is required"),
    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{6,10}$/,
        "password should be between 6 and 10 characters"
      )
      .required("password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: myValidate,
    onSubmit: handleLogin,
  });

  return (
    <>
      {ApiError ? (
        <h3 className="w-1/2 mx-auto bg-red-600 text-white font-bold rounded-lg p-3">
          {ApiError}
        </h3>
      ) : null}

      <div className="my-5">
        <h2 className="font-bold text-2xl text-emerald-600 mb-3">Login</h2>
        <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              type="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-emerald-600 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
            />
            <label
              htmlFor="email"
              className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Email
            </label>
            {formik.errors.email && formik.touched.email ? (
              <span className="text-red-500">{formik.errors.email}</span>
            ) : null}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              type="password" // تغيير النوع إلى "password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-emerald-600 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Password
            </label>
            {formik.errors.password && formik.touched.password ? (
              <span className="text-red-500">{formik.errors.password}</span>
            ) : null}
          </div>

          <div className="flex gap-4 items-center">
            <button
              type="submit"
              className="text-white bg-emerald-600 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-600 dark:focus:ring-emerald-600"
            >
              {loading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
            </button>
            <Link to={"/register"}>
              <span className="text-blue-600 underline">
                Don't you have an account? Register Now
              </span>
            </Link>

            <Link to={"/forgetpassword"}>
              <span className="text-blue-600 underline">Forget Password</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
