import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Brands from "./components/Brands/Brands";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Notfound from "./components/Notfound/Notfound";
import UserContextProvider, { UserContext } from "./Context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductsDetails from "./components/ProductDetails/ProductDetails";
import CheckOut from "./components/CheckOut/CheckOut";
import WishList from "./components/WishList/WishList";
import AllOrders from "./components/AllOrders/AllOrders";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WishListProvider from "./Context/WishlistContext";
import CartContextProvider from "./Context/CartContext";
import { Toaster } from "react-hot-toast";
let query = new QueryClient();

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "forgetpassword",
        element: (
          <ProtectedRoute>
            <ForgetPassword />
          </ProtectedRoute>
        ),
      },
      {
        path: "allorders",
        element: (
          <ProtectedRoute>
            <AllOrders />
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        ),
      },
      {
        path: "productdetails/:id/:category",
        element: (
          <ProtectedRoute>
            <ProductsDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "brands",
        element: (
          <ProtectedRoute>
            <Brands />{" "}
          </ProtectedRoute>
        ),
      },

      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      {
        path: "categories",
        element: (
          <ProtectedRoute>
            <Categories />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <Notfound /> },
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContextProvider>
        <QueryClientProvider client={query}>
          <CartContextProvider>
            <WishListProvider>
              <RouterProvider router={router}></RouterProvider>
            </WishListProvider>
            <Toaster />
          </CartContextProvider>
        </QueryClientProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
