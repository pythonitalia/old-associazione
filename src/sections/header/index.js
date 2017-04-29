import React, { Component } from "react";
import "./style.css";

import Section from "../../components/section";
import Logo from "../../components/logo";

class HeaderSection extends Component {
  render() {
    return (
      <Section className="header-section">
          <Logo />
      </Section>
    );
  }
}

export default HeaderSection;
