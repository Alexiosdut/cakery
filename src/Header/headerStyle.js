import styled from "styled-components";
import { FaPhoneVolume } from "react-icons/fa";

// TOTAL HEIGHT OF HEADER -> 27VH
export const InfoBoxStyle = styled.div`
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
  cursor: context-menu;

  div {
    p {
      display: inline-block;
    }
  }
`;

export const BrandNameStyle = styled.div`
  cursor: context-menu;
  height: 23vh;
  display: grid;
  grid-template-rows: 2fr 1fr;
  justify-items: center;
  align-items: flex-end;

  h1 {
    font-size: 4rem;
    font-weight: 700;
  }

  span {
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: 1.5px;
    align-self: flex-start;
  }
`;

export const PhoneIconStyle = styled(FaPhoneVolume)`
  margin-right: 7px;
`;
