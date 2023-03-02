import React from "react";
import { useSelector } from "react-redux";
import { selectPotions } from "../features/allPotionSlice";
import { NavLink } from "react-router-dom";

const AllPotions = () => {
  const potions = useSelector(selectPotions);
  return (
    <div>
      <h1 >All Potion</h1>
      {potions && potions.length ? potions.map((potion) => (
        <div key={potion.id} >
          <NavLink to={`/potions/${potion.id}`} >
            <div className="potion row">
              <img src={potion.imageUrl} />
              <h3>{potion.name}</h3>
              <h3>{potion.description}</h3>
              <h3>{potion.price}</h3>
            </div>
          </NavLink>
        </div>
      ))
        : null}
    </div>
  );
};

export default AllPotions;
