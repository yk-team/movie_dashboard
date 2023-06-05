import React from "react";
import Cart from "../Cart/Cart";
import imagePlus from "../../assets/icons/plus.png";

const Colections = () => {
  return (
    <>
      <div className="border">
        <h2 className="text-3xl">Collections</h2>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 gap-8 ">
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <div className="bg-black opacity-30 flex justify-center items-center rounded-xl ">
              {" "}
              <img src={imagePlus} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Colections;
