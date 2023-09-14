import React from "react";

// Define an object with the CSS class names
const buttonClasses = {
  default:
    "default text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
  danger: "danger px-4 bg-red focus:ring-2 hover:bg-red-700",
  success: "success px-4 bg-green",
  warning: "warning px-4 bg-yellow bg-default-outline-blue-hover",
  primary:
    "px-4 py-2 bg-default-grey outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200",
  secondary:
    "px-4 py-2 bg-transparent outline-none border-2 border-indigo-400 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200",
  text: "bg-black",
};

export default function Button({ children, variant, link, onClick, state }) {
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
      <button className={`${className} ${state}`} onClick={onClick}>
        {children}
      </button>
    )
  );
}
