import React from "react";
import truck from "../initial/truck.jpg";
import "../index.css";
import kane from "../assets/kane.png";

function DriverProfile() {
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
                <span>Drivers</span>
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
          <h1 className="font-bold text-center">
            Transport Management/Drivers
          </h1>
        </div>
        <div className="bg-white m-5 p-6 border rounded flex flex-col gap-3">
          <div className="flex">
            <div>
              <img
                src={kane}
                alt="truck"
                className="rounded-full w-32 h-32 mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center ml-4">
              <h3 className="text-[#777474]">Driver Name</h3>
              <p>New Zealand</p>
              <div className="flex gap-1">
                <i class="bi bi-star-fill text-[#FFC700]"></i>
                <p>4.5</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F3F3F3] p-1 m-1 mt-3 rounded-[4px]">
            <div className="flex p-3">
              <div className="w-1/4 flex flex-col justify-left items-center">
                <p className="text-[#777474]">Driver Name</p>
                <p>Kane Williamson</p>
              </div>
              <div className="w-1/4 flex flex-col justify-left items-center">
                <p className="text-[#777474]">Phone Number</p>
                <p>944123213</p>
              </div>
              <div className="w-1/4 flex flex-col justify-left items-center">
                <p className="text-[#777474]">Source</p>
                <p>Wellington</p>
              </div>
              <div className="w-1/4 flex flex-col justify-left items-center">
                <p className="text-[#777474]">Destination</p>
                <p>Christchurch</p>
              </div>
            </div>
            <div className="flex p-3">
              <div className="w-1/4 flex flex-col justify-left items-center">
                <p className="text-[#777474]">Deisel Last Fill</p>
                <p>18/06/24</p>
              </div>
              <div className="w-1/4 flex flex-col justify-left items-center">
                <p className="text-[#777474]">Fast tag Remaining</p>
                <p>564</p>
              </div>
              <div className="w-1/4 flex flex-col justify-left items-center">
                <p className="text-[#777474]">Current Location</p>
                <p>Aucland</p>
              </div>
              <div className="w-1/4 flex flex-col justify-left items-center">
                <p className="text-[#777474]">Truck Number</p>
                <p>NZ 1024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverProfile;
