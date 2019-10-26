import styled from "styled-components";

export const NavBarStyle = styled.nav`
  width: 50%;
  margin: auto;

  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-around;

    li {
      display: inline-block;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: #cfa670;
      }

      button {
        color: inherit;
        background: none;
        border: none;
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
`;
