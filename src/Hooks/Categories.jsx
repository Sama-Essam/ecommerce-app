import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useCategories() {
  function getCategories() {
    return axios.get(
      `http://localhost:3000/categories/all?name=software&shared=flase`
    );
  }
  let product = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategories,
  });
  return Categories;
}
