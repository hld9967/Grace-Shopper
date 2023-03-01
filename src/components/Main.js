import React, { useEffect } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import AllItems from "./AllProducts";
import { fetchAllProductsAsync } from "../features/allProductSlice"
import { useDispatch } from "react-redux";
import { AllArmors, AllPotions, Navbar } from "./";
import AllPotions from "./mayDelAllPotions";


const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          {/* <Route path="/allPotions" element={<AllPotions />} /> */}
          {/* <Route path="/singlePotion" element={<SinglePotion />} /> */}
          <Route/>
          <Route/>
          {/* <Route path="/allArmors" element={<AllArmors />} /> */}
          {/* <Route path="/allPotions" element={<AllPotions />} /> */}
        </Routes>
      </div>
  );
};

export default Main;
