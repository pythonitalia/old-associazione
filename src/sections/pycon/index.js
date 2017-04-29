import React, { Component } from "react";
import "./style.css";

import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Button from "../../components/button";

class PyconSection extends Component {
  render() {
    return (
      <Section className="pycon-section">
        <h1>PyCon Italia</h1>

        <Paragraph color="white">
          But I must explain to you how all this mistaken idea
          of denouncing pleasure and praising pain was born
          and I will give you a complete account of the system.
        </Paragraph>

        <Button href="https://www.pycon.it" target="_blank">Visita il sito</Button>
      </Section>
    );
  }
}

export default PyconSection;
