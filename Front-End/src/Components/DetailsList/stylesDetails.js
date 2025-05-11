import styled from "styled-components";

export const Wapper = styled.div`
  padding: 10px;
  max-height: 500px;
  width: 600px;
  overflow-y: auto;
  gap: 0.5rem;
  justify-content: space-around;
  flex-wrap: wrap;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    min-width: 350px;
  }

  span {
    justify-content: flex-start;
  }
`;
