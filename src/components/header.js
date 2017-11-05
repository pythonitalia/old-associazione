import React, { Component } from "react";

import styled from "styled-components";

import Section from "./section";
import Logo from "./logo";

const HeaderSection = Section.extend`
  background: #18a8e8;
  color: white;

  svg {
    display: block;
    width: 80%;
    max-width: 500px;
    height: auto;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderSection>
        <Logo />
      </HeaderSection>
    );
  }
}

export default Header;
