import styled from "styled-components";

export const InfoBox = styled.div`
  height: 4vh;
  background-color: #222;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  font-size: 0.8rem;
  letter-spacing: 0.6px;
  font-weight: 700;
`;

export const BrandName = styled.div`
  cursor: context-menu;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    margin-top: 3.5rem;
    margin-bottom: 0.1rem;
  }

  span {
    display: block;
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2.5rem;
    letter-spacing: 1.5px;
  }
`;
