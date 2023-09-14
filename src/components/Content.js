import React from "react";
import Button from "./Button";

// Define an object of button variants
const buttonVariants = {
  default: "default",
  "&:hover, &:focus": "default",
  "default-outline": "default",
  "default-outline-&:hover, &:focus": "default",
  text: "default",
  "text &:hover, &:focus": "default",
  "disable-shadow": "default",
  disabled: "default",
  warning: "warning",
  primary: "primary",
  secondary: "secondary",
};

// Define a function component that renders the buttons
export default function Content() {
  // Use the return statement inside the function
  return (
    <>
      <div className="flex-1 p-10 text-2xl font-bold">
        <h1 className="text-gray-600">Buttons</h1>
        {/* Use grid-cols-2 for the first 6 buttons */}
        <div className="grid grid-cols-2 gap-4">
          {/* Loop over the first 6 button variants */}
          {Object.entries(buttonVariants)
            .slice(0, 6)
            .map(([key, value]) => (
              <div class="justify-items-center">
                <p className="text-xs font-extralight">{`<Button variant="${key}" />`}</p>
                <Button
                  state="hullo"
                  variant={key}
                  key={key}
                  {...(key === "text" ? { link: "#" } : {})}
                >
                  {value}
                </Button>
              </div>
            ))}
        </div>
        {/* Use grid-cols-3 for the 7th and 8th buttons */}
        <div className="grid grid-cols-3 gap-4">
          {/* Loop over the 7th and 8th button variants */}
          {Object.entries(buttonVariants)
            .slice(6, 8)
            .map(([key, value]) => (
              <div class="justify-items-center">
                <Button
                  variant={key}
                  key={key}
                  //Using a conditional operator this specifices shen the variant is equal to text pass the link prop, otherwise leave it empty
                  {...(key === "text" ? { link: "#" } : {})}
                >
                  {value}
                </Button>
              </div>
            ))}
        </div>
        {/* Use grid-cols-4 for the rest of the buttons */}
        <div className="grid grid-cols-4 gap-4">
          {/* Loop over the rest of the button variants */}
          {Object.entries(buttonVariants)
            .slice(8)
            .map(([key, value]) => (
              <div class="justify-items-center">
                <Button
                  variant={key}
                  key={key}
                  {...(key === "text" ? { link: "#" } : {})}
                >
                  {value}
                </Button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
