import styled from "styled-components";

export const Section = styled.section`
  font-weight: 300;
  font-size: 1rem;
  color: #333;
  text-align: center;
  text-transform: uppercase;
`;

export const Box = styled.div`
  margin-bottom: 1.2rem;

  p {
    font-size: 1.7rem;

    &:first-child {
      margin-bottom: 1.5rem;
    }
  }
`;

export const BoxFounder = styled.div`
  p {
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  span {
    display: block;
    font-family: "Pacifico", cursive;
    margin-top: 2rem;
    font-size: 1.3rem;
  }
`;
