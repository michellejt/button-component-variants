import React from "react";
import Button from "./Button";

export default function Content() {
  return (
    <>
      <div className="flex-1 p-10 text-2xl font-bold">
        <h1 className="text-gray-600">Buttons</h1>
        <Button
          variant="primary"
          onClick={() => {
            alert("Hello");
          }}
        >
          Primary
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button>Hi</Button>
      </div>
    </>
  );
}
