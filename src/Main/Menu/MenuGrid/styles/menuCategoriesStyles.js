import styled from "styled-components";

export const CategoryBoxStyle = styled.ul`
  list-style-type: none;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
  text-transform: uppercase;
  background-color: #eee;
`;

export const CategoryStyle = styled.li`
  cursor: pointer;
  color: ${props => props.currentCategory === props.menuItem && "#cfa670"};
  transition: color 0.2s;
  font-weight: 700;
  font-size: 1rem;
`;
