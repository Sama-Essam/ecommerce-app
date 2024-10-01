import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let WishListContext = createContext();

export default function WishListContextProvider(props) {
  let headers = {
    token: localStorage.getItem("userToken"),
  };

  function addproductstowishlist(productid) {
    return axios
      .post(
        `{{BaseUrl}}/api/v1/wishlist`,
        {
          productId: productid,
        },
        {
          headers,
        }
      )
      .then((res) => res)
      .catch((err) => err);
  }
  function getuserwishlist() {
    return axios.get(
      `{{BaseUrl}}/api/v1/wishlist`,
      {
        headers,
      }
        .then((res) => res)
        .catch((err) => err)
    );
  }
  return (
    <WishListContext.Provider
      value={{ addproductstowishlist, getuserwishlist }}
    >
      {props.children}
    </WishListContext.Provider>
  );
}
