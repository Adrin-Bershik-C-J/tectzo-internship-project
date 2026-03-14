import React from "react";
import vijay from "../assets/vijay.jpg";

function DriverCard() {
  return (
    <div>
      <div className="h-[25rem] w-[15rem] flex flex-col p-3 bg-white rounded-[5px]">
        <img
          src={vijay}
          className="h-[15rem] w-[15rem] rounded-tl-[5px] rounded-tr-[5px]"
        />
        <div className="mt-2 mb-2">
          <p>Parthiban</p>
          <p>Super Senior Driver</p>
          <p>1234567890</p>
        </div>
        <div className="flex flex-col gap-1">
          <button className="bg-[#5EDA90] rounded-[5px]">EDIT</button>
          <button className="bg-[#FF7878] rounded-[5px]">DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
