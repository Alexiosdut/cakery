import styled from "styled-components";

// TOTAL HEIGHT OF CAROUSEL -> 65VH + 1VH OF MARGIN
export const CarouselImageBox = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 1vh;
`;

export const CarouselImage = styled.div`
  background-image: url(${props => props.imageSrc});
  height: 65vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
