import React from "react"

export default function Card(props) {
  const {children, className} = props
    return (
      <div 
      className={className ? className : "bg-cream-500 rounded"} 
      >
      {children}
      </div>
    )
  }