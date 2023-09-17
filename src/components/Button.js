import React from "react";

// Define an object with the CSS class names
const buttonClasses = {
  default:
    "default text-default bg-default hover:bg-default-hover font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  "default-hover":
    "default text-default bg-default-hover font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  danger: "danger px-4 bg-red focus:ring-2 hover:bg-red-700",
  outline:
    "default text-primary border border-primary hover:bg-default-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  "outline-hover":
    "default text-primary border border-primary bg-primary-opacity hover:bg-default-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  text: "text text-primary hover:bg-primary-opacity focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2",
  "text-hover":
    "default text-primary bg-green-600 bg-primary-opacity focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  disableShadow:
    "default text-white bg-green-600 hover:bg-default-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  disabled:
    "default text-white bg-purple-600 hover:bg-default-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",

  warning: "warning px-4 bg-yellow bg-default-outline-blue-hover",
  primary:
    "px-4 py-2 bg-default-grey outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200",
  secondary:
    "px-4 py-2 bg-transparent outline-none border-2 border-indigo-400 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200",
};

export default function Button({
  children,
  variant,
  link,
  onClick,
  state,
  disabled,
}) {
  // Use the variant prop to access the corresponding class name
  const className = buttonClasses[variant] || buttonClasses.default; // Set as default button class
  return (
    // Use a conditional operator to check the variant prop and return either a button or a link element
    variant === "text" ? (
      // If the variant is text, return a link element with the children as the text
      <a href={link} className={className} onClick={onClick}>
        {children}
      </a>
    ) : (
      // Otherwise, return a button element with the children as the content
      <button
        className={`${className}  ${state || ""}`}
        disabled={disabled ? true : false}
        onClick={onClick}
      >
        {children}
      </button>
    )
  );
}
