import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AllProducts from "./AllProducts";
import { fetchAllProductsAsync } from "../features/allProductSlice"
import { useDispatch } from "react-redux";
import { Navbar } from "./";



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
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
