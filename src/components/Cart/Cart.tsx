import React from "react";
import plusImage from "../../assets/icons/plus.png";
import fightClub from "../../assets/icons/fightClub.jpeg"

export const Cart = () => {
  return (
    <div className="flex flex-col max-w-xs bg-black opacity-90 rounded-xl">
      <div className="flex flex-col p-1 h-96 ">
        <div className="h-full bg-white rounded">
          <img className="h-full w-max " src={fightClub} alt="" />
        </div>
        <div className="p-2">
          <div className="h-content text-3xl text-white">Fight Club </div>
          <div className="flex text-base text-white pt-2 pb-4 ">
            <div>1999</div>
            <div className="pl-4">Drama</div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="bg-amber-300 w-fit p-1 rounded">IMDb 9,0</div>
            <img className="w-8 " src={plusImage} alt="plus" />
          </div>
        </div>
      </div>
    </div>
  );
};
