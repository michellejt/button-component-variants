import React from "react";
import Icon from "@material-ui/core/Icon";

// Define an object with the CSS class names
const buttonClasses = {
  default:
    "default text-default bg-default shadow-sm hover:bg-default-hover font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  "default-hover":
    "default text-default bg-default-hover shadow-sm font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  outline:
    "default text-primary border border-primary shadow-sm hover:bg-default-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  "outline-hover":
    "default text-primary border border-primary shadow-sm bg-primary-opacity hover:bg-default-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  text: "text text-primary hover:bg-primary-opacity focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2",
  "text-hover":
    "default text-primary bg-green-600 bg-primary-opacity shadow-sm focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  disableShadow:
    "default text-white bg-primary shadow-none hover:bg-default-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  disabled:
    "default text-disabled bg-default font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed",
  lg: "lg h-12 px-6 m-2 text-lg text-indigo-100 shadow-sm transition-colors duration-150 bg-primary rounded-lg focus:shadow-outline hover:bg-indigo-800",
  med: "med h-10 px-5 m-2 text-indigo-100 transition-colors shadow-sm  duration-150 bg-primary rounded-lg focus:shadow-outline hover:bg-indigo-800",
  sm: "sm h-8 px-4 m-2 text-sm text-indigo-100 shadow-sm transition-colors duration-150 bg-primary rounded-lg focus:shadow-outline hover:bg-indigo-800",
  primary:
    "default text-white bg-primary hover:bg-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  secondary:
    "default text-white bg-secondary hover:bg-secondary-dark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  danger:
    "default text-white bg-danger hover:bg-danger-dark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  "primary-hover":
    "default text-white bg-primary-dark hover:bg-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  "secondary-hover":
    "default text-white bg-secondary-dark hover:bg-secondary-dark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  "danger-hover":
    "default text-white bg-danger-dark hover:bg-danger-dark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
};

export default function Button({
  children,
  variant,
  link,
  onClick,
  state,
  size,
  color,
  disabled,
  startIcon,
  endIcon,
}) {
  // Use the variant prop to access the corresponding class name
  const className =
    buttonClasses[variant] ||
    buttonClasses[state] ||
    buttonClasses[size] ||
    buttonClasses[color] ||
    buttonClasses.default; // Set as default button class
  return (
    // Use a conditional operator to check the variant prop and return either a button or a link element
    variant === "text" ? (
      // If the variant is text, return a link element with the children as the text
      <a
        href={link}
        className={`${className} ${state || ""} ${size || ""} ${
          disabled ? buttonClasses.disabled : "" // Add this condition
        }`}
        disabled={disabled ? true : false} // Add this attribute
        onClick={onClick}
      >
        {children}
      </a>
    ) : (
      // Otherwise, return a button element with the children as the content
      <button
        className={`${className} ${state || ""} ${size || ""} ${
          disabled ? buttonClasses.disabled : ""
        }`}
        disabled={disabled ? true : false}
        onClick={onClick}
      >
        {startIcon && <Icon>{startIcon}</Icon>}
        {children}
        {endIcon && <Icon>{endIcon}</Icon>}
      </button>
    )
  );
}
