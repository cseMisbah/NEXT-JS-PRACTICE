"use client";
import React from "react";

const Button = () => {
  return (
    <div>
      <button
        className="bg-green-500 rounded-sm px-2 py-1"
        onClick={() => console.log("I have clicked here")}
      >
        Click here
      </button>
    </div>
  );
};

export default Button;
