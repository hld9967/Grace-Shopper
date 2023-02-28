import React from "react";
import { useSelector } from "react-redux";
import { selectPotions } from '../features/allPotionSlice'
import { NavLink } from "react-router-dom";

const AllPotions = () => {
  const potions = useSelector(selectPotions);
  return (
    <div>
      <h1 id="allPosHead">All Potions</h1>
      {potions && potions.length ? potions.map((potion) => (
        <div key={potion.id} > 
          <NavLink to={`/potions/${potion.id}`} >
            <div className="potion row">
              <img src={potion.imageUrl} />
              <h2>{potion.name}</h2>
            </div>
          </NavLink>
        </div>
          ))
        : null}
    </div>
  );
};

export default AllPotions;
