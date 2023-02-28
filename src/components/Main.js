import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AllItems from "./AllProducts";
import { fetchAllProductsAsync } from "../features/allProductSlice"
import { useDispatch } from "react-redux";
import { Navbar, SinglePotion } from "./";
import AllPotions from "./AllPotions";


const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/allProducts" element={<AllItems />} />
          <Route path="/allPotions" element={<AllPotions />} />
          <Route path="/singlePotion" element={<SinglePotion />} />
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
