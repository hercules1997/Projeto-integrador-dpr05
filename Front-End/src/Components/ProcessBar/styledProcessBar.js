import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

const ProgressContainer = styled.div`
  margin: 1rem 0;
`;

const ProgressBarBackground = styled.div`
  height: 10px;
  background: ${colorsTheme.light};
  border-radius: 8px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  height: 10px;
  background: ${colorsTheme.success};
  transition: width 0.3s ease-in-out;
  width: ${(props) => props.width}%;
`;

const ProgressText = styled.p`
  text-align: start;
  font-size: 1rem;
  margin-top: 0.9rem;
`;

export {
  ProgressContainer,
  ProgressBarBackground,
  ProgressBarFill,
  ProgressText,
};
