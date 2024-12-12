import React from "react";
// import { ArrowLeftOutlined } from "@ant-design/icons"; // Import the Left Arrow Icon
import Card from "../components/Card";
import CodeCard from "../components/CodeCard";
import HeroSection from "../components/HeroSection";
import Login from "../components/Login";
import "../scss/pages/signup.scss"

const Form = () => {
  return (
    <div className="signup">
      {/* left section */}
      <div className="signup__layout">
        <div className="signup__layout__back cardText">
          {/* <ArrowLeftOutlined style={{ fontSize: "15px", width:"19px" }}/> */}
          Back
        </div>
        <div className="signup__layout__cards">
          <div className="signup__layout__cards__heading h3">Layout Cards</div>
          <Card
            name="Singapore"
            office="Head Office"
            text="Road to nowhere, 06-404, 500 Internal Error"
            imgSrc="./singapore.jpg" // Correct path to image in the public folder
          />
          <div className="row">
            <Card
              name="Hong Kong"
              office="Branches"
              text="Road to nowhere, 06-404, 500 Internal Error"
              imgSrc="./HongKong.jpg" // Correct path to image in the public folder
            />
            <Card
              name="USA"
              office="Branches"
              text="Road to nowhere, 06-404, 500 Internal Error"
              imgSrc="./usa.png" // Correct path to image in the public folder
            />
          </div>
        </div>
      </div>
      {/* RIGHT section */}
      <div className="signup__rightSection">
        <Login/>
      </div>
    </div>
  );
};

export default Form;
