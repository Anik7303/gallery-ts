import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  font-size: 0.8rem;
  color: ${(p) => p.theme.color.white};
  background-color: ${(p) => p.theme.color.primary};
  padding: 0.5rem 0;
  text-align: center;
`;

interface FooterProps {
  name: string;
  year: string;
}

const Footer: React.FC<FooterProps> = ({ name, year }) => {
  return (
    <Wrapper>
      {name} &copy;{year}
    </Wrapper>
  );
};

export default Footer;
