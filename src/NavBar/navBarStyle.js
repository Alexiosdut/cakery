import styled from "styled-components";

export const NavBarStyle = styled.nav`
  width: 80%;
  margin: auto;
  display: flex;

  ul {
    width: 100%;
    list-style-type: none;

    li {
      display: inline-block;
      padding: 0 1rem;
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
        cursor: pointer;
      }
    }
  }
`;
