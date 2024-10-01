import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useProducts() {
  function getproducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let product = useQuery({
    queryKey: ["recentproducts"],
    queryFn: getproducts,
    staleTime: 7000,
  });
  return product;
}
