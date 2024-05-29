import React from "react";
import Testimonials from "../components/Testimonials";
import OurServices from "../components/OurServices";
import Signup from "./Signup";

const Home = () => {
  return (
    <div>
      <OurServices />
      <Testimonials />
      <Signup />
    </div>
  );
};

export default Home;
