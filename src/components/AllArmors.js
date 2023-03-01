import React from "react";
import { useSelector } from "react-redux";
import { selectArmors } from "../features/allArmorSlice";
import { NavLink } from "react-router-dom";

const AllArmors = () => {
  const armors = useSelector(selectArmors);
  return (
    <div>
      <h1 >All Armor</h1>
      {armors && armors.length ? armors.map((armor) => (
        <div key={armor.id} > 
          <NavLink to={`/armors/${armor.id}`} >
            <div className="armor row">
              <img src={armor.imageUrl} />
              <h3>{armor.name}</h3>
              <h3>{armor.description}</h3>
              <h3>{armor.price}</h3>
            </div>
          </NavLink>
        </div>
          ))
        : null}
    </div>
  );
};

export default AllArmors;
