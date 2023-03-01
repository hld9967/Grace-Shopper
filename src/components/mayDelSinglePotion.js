// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { selectSinglePotion, fetchSinglePotion, } from '../features/singlePotionSlice'

// const SinglePotion = () => {
//   const { potionId } = useParams();

//   const singlePotion = useSelector(selectSinglePotion);
//   const { name, imageUrl, description, price } = singlePotion.info;


//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchSinglePotion(potionId));
//   }, [dispatch]);

//   return (
//     <div id="one-potion" className="column">
//       <div id="one-potion-detail" className="row">
//         <div className="column mr1">
//         <img src={imageUrl} />
//           <h2>{name}</h2>
//           <h3>{description}</h3>
//           <h3>{price}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SinglePotion;