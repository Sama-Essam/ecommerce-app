import React, { useContext } from "react";
import style from "./Home.module.css";
import { UserContext } from "../../Context/UserContext";
import RecentProducts from "../RecentProducts/RecentProducts";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import MainSlider from "../MainSlider/MainSlider";

export default function Home() {
  let { counter, changecounter } = useContext(UserContext);
  return (
    <>
      <MainSlider />
      <CategoriesSlider />
      <RecentProducts />
    </>
  );
}
