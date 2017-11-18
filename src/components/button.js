import styled from "styled-components";
export default styled.a`
   {
    display: block;
    border: none;
    background: #ffc80a;
    box-shadow: -0.5em 0.5em 0 0 #0b59d6;
    text-transform: uppercase;

    font-weight: 900;
    color: #0b59d6;
    letter-spacing: 2.8px;

    padding: 1em 1.5em;
    cursor: pointer;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    color: #ffc80a;
    background: #0b59d6;
    box-shadow: -0.5em 0.5em 0 0 #ffc80a;
  }
`;
