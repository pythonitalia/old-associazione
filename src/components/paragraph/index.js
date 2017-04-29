import React from "react";

import "./style.css";

export default ({ children, color }) => (
  <p className="paragraph" style={{
    color: color,
  }}>
    {children}
  </p>
);
