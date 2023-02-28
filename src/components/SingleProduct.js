import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  fetchSingleProductAsync,
  selectSingleProduct,
} from "../features/singleCampusSlice";

const SingleProduct = () => {
  const [Loaded, setLoaded] = useState(false);

  const { productId } = useParams();
  const dispatch = useDispatch();

  const singleProduct = useSelector(selectSingleProduct);
  const { name, imageUrl, description, price} = singleProduct;

  useEffect(() => {
    dispatch(fetchSingleProductAsync(productId));
    setLoaded(true);
  }, [dispatch]);

  if (Loaded && singleProduct) {
     (<div>
        Product: <Link to={`/product/${singleProduct.id}`}>{singleProduct.name}</Link>
      </div>);
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
