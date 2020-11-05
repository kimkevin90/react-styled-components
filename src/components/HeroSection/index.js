import React, { useState } from "react";
import Video from "../../videos/video2.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>글이 작품이 되는 공간, 글판기</HeroH1>
        <HeroP>글판기에 담긴 아름다운 작품을 감상해 보세요.</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            // primary="true"
            // dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
