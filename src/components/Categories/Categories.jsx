import React from "react";
import style from "./Categories.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { date } from "yup";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useCategories from "../../Hooks/useProducts";
export default function Categories() {
  function getCategories() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((res) => {
        console.log(res.data.data);
        setcategories(res.data.data);
      });
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      {category.map((category) => (
        <div>
          <img
            src={category.image}
            className="w-full h-[200px] object-cover "
            alt=""
          />
          <h4>{category.name}</h4>
        </div>
      ))}
      <div className="row">
        {data?.data?.data.map((category) => (
          <div key={category.id} className="w-full md:w-1/3 1g:w-1/4 xl:w-1/6">
            <div className="category p-2">
              <Link to={`category/${category.name}`}>
                <img
                  src={category.imageCover}
                  className="w-full"
                  alt={category.title}
                />
                <h3 className="text-emerald-600">{category.name}</h3>
                <h3 className="font-semibold">{category.title}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
