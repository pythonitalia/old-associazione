import styled, { css } from "styled-components";

export default styled.h1`
  margin: 0 0 1rem;
  font-weight: 900;
  font-size: 30px;
  color: #0b59d7;
  letter-spacing: 0;

  @media (min-width: 500px) {
    .title {
      margin: 0 0 2rem;
      font-size: 45px;
    }
  }

  ${props =>
    props.white &&
    css`
      color: white;
    `};
`;
