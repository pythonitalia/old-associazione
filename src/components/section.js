import React, { Component } from "react";

import styled, { css } from "styled-components";

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
  align-items: center;

  > div {
    height: 100%;
    width: 90%;
    margin: 0 auto;
    max-width: ${props => props.maxWidthInner || 920}px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    border: 4px solid #ffc80a;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 2em;
  }

  @media (min-width: 500px) {
    p {
      line-height: 30px;
      font-size: 20px;
    }
  }

  ${props =>
    props.background &&
    css`
      background: url(${props.background});
      background-size: cover;
    `};

  ${props =>
    props.yellow &&
    css`
      background-color: #ffc80a;
    `};
`;
