import React from "react";

import styled from "styled-components";

const Wrapper = styled.dl`
  color: #0b59d6;
  border: 4px solid #0b59d6;

  padding: 1rem;
  margin-bottom: 1rem;

  > dt {
    font-family: "Lato", sans-serif;
    font-weight: 900;
    font-size: 20px;
    color: #0b59d6;
    letter-spacing: 0;
    line-height: 35px;

    text-transform: uppercase;
  }

  > dd {
    margin: 0;
    font-style: italic;
  }

  @media (min-width: 500px) {
    > dt {
      font-size: 26px;
    }
  }
`;

export default ({ name, bio }) => (
  <Wrapper>
    <dt>{name}</dt>
    <dd>{bio}</dd>
  </Wrapper>
);
