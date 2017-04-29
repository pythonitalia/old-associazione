import React, { Component } from "react";
import "./style.css";

import Section from "../../components/section";
import Title from "../../components/title";
import Paragraph from "../../components/paragraph";
import Image from "../../components/image";

import team from "./team.jpg";

class WhatSection extends Component {
  render() {
    return (
      <Section className="what-section">
        <Title>Cos'è Python Italia</Title>

        <div className="what-section__wrapper">
            <div>
              <Paragraph>
                But I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a complete
                account of the system, and expound the actual teachings of the great
                explorer of the truth, the master-builder of human happiness.

                No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                but because those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful.
              </Paragraph>
            </div>

            <div className="what-section__image">
              <Image src={team} />
            </div>
        </div>
      </Section>
    );
  }
}

export default WhatSection;
