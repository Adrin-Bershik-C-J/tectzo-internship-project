import React from "react";
import truck from "../initial/truck.jpg";
import "../index.css";

function Home() {
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
          <h1 className="font-bold text-center">Transport Management</h1>
        </div>
        <div className="flex">
          <div className="bg-white border rounded w-1/2 m-5 p-6 flex">
            <div className="flex gap-4 flex-col mr-[14rem]">
              <h1 className="font-bold">Trucks</h1>
              <h4>Available Trucks</h4>
              <h4>Active Trucks</h4>
              <h4>Under Maintance</h4>
              <h4>Inactive Trucks</h4>
            </div>
            <div className="flex gap-4 flex-col justify-end">
              <h4>8</h4>
              <h4>8</h4>
              <h4>20</h4>
              <h4>15</h4>
            </div>
          </div>

          <div className="bg-white border rounded w-1/2 m-5 p-6 flex">
            <div className="flex gap-4 flex-col mr-[14rem]">
              <h1 className="font-bold">Orders</h1>
              <h4>Delivered Orders</h4>
              <h4>Out for delivery</h4>
              <h4>Pending Orders</h4>
              <h4>Delivery Failed</h4>
            </div>
            <div className="flex gap-4 flex-col justify-end">
              <h4>8</h4>
              <h4>8</h4>
              <h4>20</h4>
              <h4>15</h4>
            </div>
          </div>
        </div>
        <div className="bg-white border rounded w-[440px] m-5 p-6 flex flex-col gap-4">
          <h1 className="font-bold">Available Orders</h1>
          <div className="flex">
            <div className="mr-[15.5rem]">
              <h4>Drivers Online</h4>
            </div>
            <div>6</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
