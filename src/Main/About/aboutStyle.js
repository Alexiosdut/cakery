import styled from "styled-components";

export const AboutSectionStyle = styled.section`
  position: relative;

  img {
    width: 70%;
    height: 93vh;
    object-fit: cover;
    object-position: 100% 100%;
  }

  div {
    background-color: #fff;
    width: 45%;
    padding: 2rem;
    position: absolute;
    top: 12vh;
    right: 0;
    z-index: 2;

    p {
      color: #333;
      font-size: 0.9rem;
      margin-top: 0.8rem;
      line-height: 1.6;

      &:first-of-type {
        margin-top: 1.5rem;
      }
    }
  }
`;
