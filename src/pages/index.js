import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Footer from "../components/Footer";
//homeObj를 프롭스로 전달하고 이때 스타일 컴포넌트에도 전달한다?
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
