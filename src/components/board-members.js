import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 640px;
  justify-content: space-between;

  > * {
    width: 100%;
  }

  @media (min-width: 640px) {
    > * {
      width: calc(100% / 2 - 10px);
    }
  }
`;
