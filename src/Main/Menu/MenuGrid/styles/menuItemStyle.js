import styled from "styled-components";

export const ItemStyle = styled.div`
  width: 50%;
  display: inline-block;
  padding: 0 1rem;

  div {
    display: flex;

    h3 {
      color: #000;
      font-size: 0.9rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    div {
      flex-grow: 1;
      border-bottom: dashed 1px #cfa670;
      margin-bottom: 4px;
    }

    span {
      font-weight: 700;
    }
  }

  p {
    font-size: 0.9rem;
    width: 70%;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    color: #424242;
    text-transform: capitalize;
  }
`;
