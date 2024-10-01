import React, { useContext } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/navbar2.png";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Navbar() {
  let { userlogin, setuserlogin } = useContext(UserContext);
  let navigate = useNavigate();
  function signout() {
    localStorage.removeItem("userToken");
    setuserlogin(null);
    navigate("/login");
  }
  return (
    <>
      <nav className=" border-gray-200 bg-slate-200 fixed top-0 left-0 right-0">
        <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center gap-5">
            <Link
              to=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="Flowbite Logo" />
              <h1 className="flex gap-5"></h1>
            </Link>
            {userlogin !== null ? (
              <>
                <ul className="flex gap-4">
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="products">Products</Link>
                  </li>
                  <li>
                    <Link to="categories">Categories</Link>
                  </li>
                  <li>
                    <Link to="wishlist">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="brands"> Brands</Link>
                  </li>
                </ul>
              </>
            ) : null}
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="icons flex gap-4">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instgram"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-google"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-tiktok"></i>
            </div>
            <div className="links flex gap-4">
              {userlogin != null ? (
                <span onClick={signout} className="text-sm cursor-pointer ">
                  Signout
                </span>
              ) : (
                <>
                  <Link to="login" className="text-sm  ">
                    Login
                  </Link>

                  <Link to="register" className="text-sm  ">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
