import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AllItems from "./allitems";
import { fetchAllProductsAsync } from "../features/allitemsSlice"
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
          <Route path="/allProducts" element={<AllItems />} />
          <Route/>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
