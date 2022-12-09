import React from "react";
import styled from "styled-components";

import { Photo } from "../interfaces/Photo";

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.article`
  width: 100%;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
`;

interface ImageProps {
  alignTo: string;
}

const StyledImage = styled.img<ImageProps>`
  display: block;
  width: ${(p) => (p.alignTo === "width" ? "100%" : "auto")};
  height: ${(p) => (p.alignTo === "height" ? "100%" : "auto")};
  object-fit: cover;
  margin: 0 auto;
  border-radius: 1rem;
`;

interface GalleryProps {
  photos: Photo[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  return (
    <Wrapper>
      {photos.map(({ id, alignTo, description, urls }, index) => (
        <ImageContainer key={`${id}_${index}`}>
          <StyledImage src={urls.small} alt={description} alignTo={alignTo} />
        </ImageContainer>
      ))}
    </Wrapper>
  );
};

export default Gallery;
