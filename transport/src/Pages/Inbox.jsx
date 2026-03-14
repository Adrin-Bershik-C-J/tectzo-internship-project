import React from "react";
import truck from "../initial/truck.jpg";
import "../index.css";
function Inbox() {
  return (
    <div className="flex h-screen font-josefin">
      <div className="flex flex-col w-1/4 bg-[#FF7878] items-center justify-center gap-4 text-white">
        <img
          src={truck}
          alt="truck"
          className="rounded-[5px] w-34 h-32 mx-auto"
        />
        <h1 className="text-[25px]">Truck Management</h1>
        <div className="text-[20px]">
          <ul className="space-y-2">
            <li>
              <a href="#">
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Inbox</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Driver</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-3/4 bg-[#F4F4F4] flex flex-col">
        <div className="bg-white m-5 p-6 border rounded">
          <h1 className="font-bold text-center">Transport Management/Inbox</h1>
        </div>
        <div className="bg-white m-5 p-6 border rounded flex flex-col gap-3">
          <h1 className="font-bold">Truck Request</h1>
          <div className="flex">
            <div className="flex flex-col gap-1 mr-[5rem]">
              <h1>Name</h1>
              <h1>Phone Number</h1>
              <h1>Source</h1>
              <h1>Destination</h1>
              <h1>Good Type</h1>
              <h1>Vehicle Count</h1>
              <h1>Timing</h1>
            </div>
            <div className="flex flex-col gap-1 text-[#99665B]">
              <h1>Jack</h1>
              <h1>9878987612</h1>
              <h1>Chennai</h1>
              <h1>Hosur</h1>
              <h1>Sugarcane</h1>
              <h1>1</h1>
              <h1>09/06/2023 - 9:30 am</h1>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <button className="bg-[#5EDA90] text-white p-2 w-[6rem] rounded-[5px]">
              Accept
            </button>
            <button className="bg-[#FF7878] text-white p-2 w-[6rem] rounded-[5px]">
              Refuse
            </button>
            <button className="bg-[#5EDA90] text-white p-2 w-[6rem] rounded-[5px]">
              Allocate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
