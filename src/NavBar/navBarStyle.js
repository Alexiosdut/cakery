import styled from "styled-components";

// TOTAL HEIGHT OF NAV -> 7VH
export const NavBarStyle = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #fff;
  height: 7vh;

  nav {
    width: 50%;
    margin: auto;
    height: inherit;

    ul {
      width: 100%;
      list-style-type: none;
      display: flex;
      justify-content: space-around;
      height: inherit;
      align-items: center;

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
  }
`;
