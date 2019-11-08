import React from "react";
import { aboutImage } from "../../data/images";

import { AboutSectionStyle } from "./aboutStyle";
import {
  BigSpanStyle,
  BigH2Style,
  SmallH3Style
} from "../../sharedStyles/sharedStyles";

function About() {
  return (
    <AboutSectionStyle>
      <img src={aboutImage.src} alt="" />
      <div>
        <BigSpanStyle>discover</BigSpanStyle>
        <BigH2Style>OUR STORY</BigH2Style>
        <SmallH3Style>ULTIMATE DINING EXPERIENCE LIKE NO OTHER</SmallH3Style>
        <p>
          The 1918–19 Duke Blue Devils men's basketball team represented Duke
          University during the 1918–19 men's college basketball season. The
          head coach was Charles Doak, coaching his third season with the Blue
          Devils. The team finished with an overall record of 6–5.
        </p>

        <p>
          The first season of Switched at Birth, an American drama television
          series, began airing on ABC Family on June 6, 2011 and concluded on
          October 22, 2012 after 30 episodes. The one-hour scripted drama
          revolves around two young women who were switched at birth and grew up
          in very different environments.
        </p>
      </div>
    </AboutSectionStyle>
  );
}

export default About;
