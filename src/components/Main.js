import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AllProducts from "./AllProducts";
import { fetchProductsAsync } from "../features/allProductsSlice"
import { useDispatch } from "react-redux";


const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
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
