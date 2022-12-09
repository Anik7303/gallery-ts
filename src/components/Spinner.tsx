import styled, { keyframes } from "styled-components";

const animate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  height: 100%;
  position: relative;
`;

const Loading = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #dddddd;
  border-right-color: var(--color-primary);
  border-radius: 50%;
  animation: ${animate} linear 1s infinite;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const Spinner: React.FC = () => (
  <Container>
    <Loading />
  </Container>
);

export default Spinner;
