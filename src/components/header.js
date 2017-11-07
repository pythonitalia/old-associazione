import React, { Component } from "react";

import styled, { css } from "styled-components";

import Logo from "./logo";

const HeaderSection = styled.div`
  background-color: #18a8e8;
  color: white;
  min-height: 100%;

  display: flex;
  justify-content: center;

  ${props =>
    props.background &&
    css`
      background: url(${props.background});
      background-size: cover;
    `};

  svg {
    display: block;
    width: 80%;
    max-width: 400px;
    height: auto;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderSection {...this.props}>
        <Logo />
      </HeaderSection>
    );
  }
}

export default Header;
