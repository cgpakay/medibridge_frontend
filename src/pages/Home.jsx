import React from "react";
import Testimonials from "../components/Testimonials";
import OurServices from "../components/OurServices";
import Faq from "../components/Faq/Faq";
import StepByStep from "../components/StepByStep";
import GetVirtualAp from "../components/GetVirtualAp";

const Home = () => {
  return (
    <div>
      <StepByStep />
      <GetVirtualAp />
      <OurServices />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
