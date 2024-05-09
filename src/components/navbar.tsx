import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold">Hotel</h1>
      <ul className="flex gap-x-4">
        <li className="font-bold">Home</li>
        <li className="font-bold">About</li>
        <li className="font-bold">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
