import React from "react";

import { InfoBoxStyle, PhoneIconStyle } from "./headerStyle";

function InfoBox() {
  return (
    <InfoBoxStyle>
      <p>The best place to eat a cake!</p>
      <div>
        <PhoneIconStyle />
        <p>123-456-789</p>
      </div>
    </InfoBoxStyle>
  );
}

export default InfoBox;
