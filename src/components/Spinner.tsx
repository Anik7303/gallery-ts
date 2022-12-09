import styled, { keyframes } from "styled-components";

const animate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #dddddd;
  border-right-color: var(--color-primary);
  border-radius: 50%;
  animation: ${animate} linear 1s infinite;
  margin: 10px;
`;

export default Spinner;
