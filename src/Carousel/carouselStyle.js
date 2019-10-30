import styled from "styled-components";

// TOTAL HEIGHT OF CAROUSEL -> 65VH + 1VH OF MARGIN
export const CarouselImage = styled.div`
  background-image: url(${props => props.imageSrc});
  height: 65vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
