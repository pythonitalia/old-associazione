import React, { Component } from "react";
import "./style.css";

import Section from "../../components/section";
import Title from "../../components/title";
import Member from "../../components/member";


class WhoSection extends Component {
  render() {
    return (
      <Section className="who-section">
          <Title>Chi siamo</Title>

          <div className="who-section__members">
            <Member
              name="Patrick Arminio"
              bio="President"
            />
            <Member
              name="Simone Zinanni"
              bio="Vice President"
            />
            <Member
              name="Matteo Benci"
              bio="Treasurer"
            />
          </div>

      </Section>
    );
  }
}

export default WhoSection;
