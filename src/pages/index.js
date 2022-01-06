import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import InfoSectionProfe from "../components/InfoSectionProfe";
import { homeObjOne } from "../components/InfoSection/Data";
import { homeObj} from "../components/InfoSectionProfe/Data";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { SliderData } from '../components/Carousel/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <Contents />
      <InfoSectionProfe {...homeObj}/>
      <Carousel slides={SliderData}/>
      <Footer />
    </>
  );
};

export default Home;