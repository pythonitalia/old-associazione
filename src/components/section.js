import React, { Component } from "react";

import styled from "styled-components";

class Section extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default styled(Section)`
  padding: 3rem 2rem;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  > div {
    height: 100%;
    width: 90%;
    max-width: 920px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }
`;
