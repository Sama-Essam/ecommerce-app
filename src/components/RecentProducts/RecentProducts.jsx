/*import React, { useContext, useEffect, useState } from "react";
import style from "./RecentProducts.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { date } from "yup";
import { useQuery } from "@tanstack/react-query";
import useProducts from "../../Hooks/useProducts";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { WishListContext } from "../../Context/WishlistContext";
export default function RecentProducts() {
  let { data, isError, error, isLoading } = useProducts();
  let { addproductstocart } = useContext(CartContext);
  let {addproductstowishlist}=useContext(WishListContext)
  const [loading, setloading] = useState(false);
  const [currentid, setcurrentid] = useState(0)
  const Product=({product})=>{
    const[iswishlist,setiswishlist]=useState(false);
    const togglewishlist=()=>{
      setiswishlist(!iswishlist);
    };
  }

  async function addtocart(id) {
    setcurrentid(id);
    setloading(true);
    let responce = await addproductstocart(id);
    console.log(responce.data);

    if (responce.data.status == "success") {
      toast.success(responce.data.message);
      setloading(false);
    } else {
      toast.error(responce.data.message);
      setloading(false);
    }
  }
  if (isError) {
    return <h3>{error}</h3>;
  }
  if (isLoading) {
    return <div className="spinner"></div>;
  }

  return (
    <>
      <div className="row">
        {data?.data?.data.map((product) => (
          <div key={product.id} className="w-full md:w-1/3 1g:w-1/4 xl:w-1/6">
            <div className="product p-2">
              <Link
                to={`productdetails/${product.id}/${product.category.name}`}
              >
                <img
                  src={product.imageCover}
                  className="w-full"
                  alt={product.title}
                />
                <h3 className="text-emerald-600">{product.category.name}</h3>
                <h3 className="font-semibold">
                  {product.title} split(" ").slice(0,2).join()
                </h3>
                <div className="flex justify-between p-3">
                  <span> {product.price} EGP</span>
                  <span>
                    <i className="fas fa-star text-yellow-400"></i>
                    {product.rating}
                  </span>
                </div>
              </Link>
            </div>
            <button onClick={() => addtocart(product.id)} className="btn">
              {loading && currentid == product.id ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "Add to cart"
             
            </button>
            )}
            <div className="product">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button onClick={togglewishlist}>
                {iswishlist ? '♥️':'♡'}
              </button>
          </div>
        
      </div>
    </>
  );
}*/
import React, { useContext, useState } from "react";
import style from "./RecentProducts.module.css";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { WishListContext } from "../../Context/WishlistContext";

export default function RecentProducts() {
  let { data, isError, error, isLoading } = useProducts();
  let { addproductstocart } = useContext(CartContext);
  let { addproductstowishlist } = useContext(WishListContext);
  const [loading, setLoading] = useState(false);
  const [currentid, setCurrentId] = useState(0);
  const [wishlistItems, setWishlistItems] = useState([]);
  async function addToCart(id) {
    setCurrentId(id);
    setLoading(true);
    let response = await addproductstocart(id);

    if (response.data.status === "success") {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  }

  async function handleWishlist(id) {
    let response = await addproductstowishlist(id);
    console.log(response.data);
    if (response.data.status === "success") {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }
  if (isLoading) {
    return <div className="spinner"></div>;
  }

  return (
    <>
      <div className="row">
        {data?.data?.data.map((product) => (
          <div key={product.id} className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
            <div className="product p-2">
              <Link
                to={`productdetails/${product.id}/${product.category.name}`}
              >
                <img
                  src={product.imageCover}
                  className="w-full"
                  alt={product.title}
                />
                <h3 className="text-emerald-600">{product.category.name}</h3>
                <h3 className="font-semibold">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <div className="flex justify-between p-3">
                  <span>{product.price} EGP</span>
                  <span>
                    <i className="fas fa-star text-yellow-400"></i>
                    {product.rating}
                  </span>
                </div>
              </Link>
            </div>

            <button onClick={() => addToCart(product.id)} className="btn">
              {loading && currentid === product.id ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "Add to cart"
              )}
            </button>

            <div className="wishlist-icon ">
              <button onClick={() => handleWishlist(product.id)}>
                {wishlistItems.includes(product.id) ? "♥️" : "♡"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
