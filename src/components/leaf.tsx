import React from "react";

const Leaf = ({ className = "", reverse = false }) => {
  return (
    <div
      style={{
        width: "15vw",
        height: "14vw",
        opacity: 0.05,
        position: "absolute",
        borderTopLeftRadius: "13vw",
        borderTopRightRadius: "1.5vw",
        borderBottomRightRadius: "13vw",
        transform: reverse ? "rotate(0deg)" : "rotate(100deg)",
      }}
      className={`absolute ${className} bg-[#E7FDEC]`}
    />
  );
};

export default Leaf;
