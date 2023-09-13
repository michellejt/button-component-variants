import React from "react";
import Button from "./Button";

// Define an array of button variants

export default function Content() {
  const buttonVariants = [
    "default",
    "danger",
    "success",
    "warning",
    "primary",
    "secondary",
  ];
  return (
    <>
      <div className="flex-1 p-10 text-2xl font-bold">
        <h1 className="text-gray-600">Buttons</h1>
        {/* map() method to loop over the button variants and render a Button component for each buttonVariant */}
        {buttonVariants.map((variant) => (
          <Button variant={variant} key={variant}>
            {variant}
          </Button>
        ))}
      </div>
    </>
  );
}
