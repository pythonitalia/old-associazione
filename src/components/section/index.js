import React, { Component } from "react";
import "./style.css";

import cx from "classnames";

class Section extends Component {
  render() {
    const className = cx("section", this.props.className);

    return (
      <div className={className}>
        <div className="section__inner">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;
