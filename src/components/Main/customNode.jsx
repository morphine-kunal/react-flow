/* eslint-disable react/prop-types */
// import React from "react";
import { Handle } from "reactflow";

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node w-[150px] rounded-lg shadow-2xl  z-[99] overflow-hidden">
      <Handle type="target" position="top" />
      <div className="custom-node-content  w-full">
        <header className="bg-green-200 w-full flex justify-between items-center py-1">
          <div className="flex gap-x-1 items-center">
            <div className="ml-1">
              <img
                src="https://img.icons8.com/?size=100&id=118377&format=png&color=000000"
                alt="message"
                className="w-[8px] h-[8px]"
              />
            </div>
            <p className="font-semibold text-[0.5rem] w-full">Send Message</p>
          </div>

          <div>
            <img
              src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
              alt="wp"
              className="w-[12px] h-[12px]"
            />
          </div>
        </header>
        <p className="text-[0.5rem] px-2 py-2 bg-white">{data.label}</p>
      </div>
      <Handle type="source" position="bottom" />
    </div>
  );
};

export default CustomNode;
