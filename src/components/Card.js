import React from "react";

export default function Card(children) {
  return (
    <>
      <div className="block max-w-[18rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="p-6">
          <h6 className="mb-2 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50">
            Card subtitle
          </h6>
          {children}
        </div>
      </div>
      ;
    </>
  );
}
