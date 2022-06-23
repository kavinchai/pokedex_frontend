import React from "react";

const Type = ({ types }) => {
  return (
    <div className="pokemonTypes">
      {types.map((type, index) => (
        <div key={index} className={`${type}Type typeContainer`}>
          {type}
        </div>
      ))}
    </div>
  );
};

export default Type;
