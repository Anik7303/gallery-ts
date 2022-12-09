import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  max-width: 75rem;
  min-height: 100vh;
  margin: 0 auto;
`;

interface LayoutProps extends React.PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
