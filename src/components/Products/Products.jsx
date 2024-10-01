import React from "react";
import style from "./Products.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { date } from "yup";
import { useQuery } from "@tanstack/react-query";
import useProducts from "../../Hooks/useProducts";
export default function Products() {
  let { data, isError, error, isLoading } = useProducts();
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
            <button className="btn">Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
