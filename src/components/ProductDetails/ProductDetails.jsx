import React, { useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function ProductDetails() {
  const [product, setproduct] = useState(null);
  const [relatedproducts, setrelatedproducts] = useState([]);
  let { id, category } = useParams();
  function getProduct(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

      .then((res) => {
        console.log(res.data.data);
        setproduct(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }
  function getallproducts() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then((res) => {
      let related = res.data.data.filter(
        (product) => product.category.name == category
      );
      console.log(related);
      setrelatedproducts(related);
    });
  }

  useEffect(() => {
    getProduct(id);
    getallproducts();
  }, [id, category]);
  return (
    <>
      <div className="row items-center">
        <div className="w-1/4">
          <img src={product?.imageCover} className="w-full" alt="" />
        </div>
        <div className="w-3/4 p-4">
          <h3 className="font-semibold capitalize text-2xl">
            {product?.title}
          </h3>
          <h4 className="text-gray600 my-4">{product?.description}</h4>
          <h4 className="font-bold">{product?.category.name}</h4>
          <div className="flex justify-between p-3 my-5">
            <span>{product?.price} EGP</span>
            <span>
              <i className="fas fa-star text-yellow-400"></i>
              {product?.ratingsAverage}
            </span>
          </div>
          <button className="btn">Add To Cart</button>
        </div>
      </div>

      <div className="row">
        {relatedproducts.length > 0 ? (
          relatedproducts.map((product) => (
            <div key={product.id} className="w-full md:w-1/3 1g:w-1/4 xl:w-1/6">
              <div className="product p-2">
                <Link
                  to={`/productdetails/${product.id}/${product.category.name}`}
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
              <button className="btn">Add To Cart</button>
            </div>
          ))
        ) : (
          <div classname="spinner"></div>
        )}
      </div>
    </>
  );
}
