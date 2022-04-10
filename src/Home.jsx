import React from "react";
import web from "../src/Images/home.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Join us now in "
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
