import React from "react";

import './custom-button.style.scss'

const CustomeButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  )
}

export default CustomeButton