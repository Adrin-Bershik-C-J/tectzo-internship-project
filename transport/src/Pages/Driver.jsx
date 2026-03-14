import React from "react";
import DriverCard from "./DriverCard";

function Driver() {
  return (
    <div className="bg-[#F2F2F2] h-screen font-josefin">
      <h1 className="p-3 font-bold">Transport Management</h1>
      <div className="flex justify-between p-4 pl-[5rem] pr-[5rem]">
        <button className="text-[#5EDA90] border border-[#5EDA90] p-2 w-[6rem] rounded-[8px] h-[2.5rem]">
          Go Back
        </button>
        <button className="bg-[#5EDA90] w-[3rem] h-[3rem] rounded-[8px]">
          +
        </button>
      </div>
      <div className="m-10 pl-[6rem]">
        <h1>Drivers</h1>
        <div className="flex gap-8 mt-5">
          <DriverCard />
          <DriverCard />
          <DriverCard />
          <DriverCard />
        </div>
      </div>
    </div>
  );
}

export default Driver;
