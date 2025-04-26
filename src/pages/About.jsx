import React from "react";
import CustomButton from "../components/common/customButton";
// import Header from "../components/layout/Header";

function About() {
  return (
    <div>
      {/* <Header /> */}
      <h1>About</h1>
      <CustomButton
        bgColor="lightgreen"
        textColor="green"
        buttonText="Press Me"
      />
    </div>
  );
}

export default About;
