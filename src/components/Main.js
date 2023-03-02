import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./AllProducts";
import { fetchProductsAsync } from "../features/allProductsSlice";
import { useDispatch } from "react-redux";
import AllArmors from "./AllArmors";
import AllPotions from "./AllPotions";
import SingleProduct from "./SingleProduct";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <>
      <div>
        <Routes>
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route />
          <Route />
          {/* <Route path="/allArmors" element={<AllArmors />} /> */}
          {/* <Route path="/allPotions" element={<AllPotions />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default Main;
