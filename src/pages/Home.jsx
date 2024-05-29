import React from "react";
import Testimonials from "../components/Testimonials";
import OurServices from "../components/OurServices";
import SignUpDoctor from "../components/SignUpDoctor";
import SignUpPatient from "../components/SignUpPatient";

const Home = () => {
  return (
    <div>
      <OurServices />
      <Testimonials />
      <SignUpDoctor />
      <SignUpPatient />
    </div>
  );
};

export default Home;
