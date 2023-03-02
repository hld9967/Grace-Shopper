import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  fetchSingleProductAsync,
  selectSingleProduct,
} from "../features/singleProductSlice";

const SingleProduct = () => {
  const [Loaded, setLoaded] = useState(false);

  const { productId } = useParams();
  // console.log('productid',productId)
  const dispatch = useDispatch();

  const singleProduct = useSelector(selectSingleProduct);
  console.log(singleProduct)
  const { name, imageUrl, description, price } = singleProduct;

  useEffect(() => {
    dispatch(fetchSingleProductAsync(productId));
    setLoaded(true);
  }, [dispatch]);
  if (Loaded && singleProduct !== null) {
    <div>
      Product:{" "}
      <Link to={`/singleProduct/${singleProduct.id}`}>{singleProduct.name}</Link>
    </div>;
      return (
        <div>
          <p>Product Name: {name}</p>
          <p>Product Image: {imageUrl}</p>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Product is not available for purchase at this time</p>
        </div>
      );
    }

};

export default SingleProduct;
