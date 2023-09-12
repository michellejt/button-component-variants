import React from "react"

export default function Button(props) {
  const {children, className, onClick} = props
    return (
      <button 
      className={className ? className : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} 
      onClick={onClick}>
      {children}
      </button>
    )
  }