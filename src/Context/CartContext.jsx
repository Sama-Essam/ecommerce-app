import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext();

export default function CartContextProvider(props) {
  const headers = {
    token: localStorage.getItem("userToken"),
  };
  const [cartid, setcartid] = useState(0);

  function addproductstocart(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: productId,
        },
        {
          headers,
        }
      )
      .then((res) => res)
      .catch((err) => err);
  }
  function logedusercart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
      .then((res) => {
        //console.log(res.data.data._id)
        setcartid(res.data.data._id);
        return res;
      })
      .catch((res) => err);
  }

  function updatecartquantity(productId, newCount) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count: newCount },
        { headers }
      )
      .then((res) => res)
      .catch((res) => err);
  }
  function deleteitems(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then((res) => res)
      .catch((res) => err);
  }
  function checkout(cardId, url, formdata) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=${url}`,
        {
          shippingAddress: formdata,
        },
        {
          headers,
        }
      )
      .then((res) => res)
      .catch((res) => err);
  }
  useEffect(() => {
    logedusercart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        addproductstocart,
        logedusercart,
        updatecartquantity,
        deleteitems,
        checkout,
        cartid,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
