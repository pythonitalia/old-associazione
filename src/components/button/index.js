import React from "react";

import "./style.css";

export default ({ children, href, target }) => (
  <a href={href} target={target} className="button">{children}</a>
);
