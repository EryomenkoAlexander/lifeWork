import React from "react";
import MainCards from "../main-cards/mainCards-assembly/MainCards";
import InsurancePrograms from '../insurance-programs/insurancePrograms-assembly/InsurancePrograms'
import TypesInsurance from "../types-insurance/types-insurance-assembly/TypesInsurance";
import AboutUs from "../about-us/about-us-assembly/AboutUs";
import News from "../news/news-assembly/News";
import UsefulButtons from "../useful-buttons/useful-buttons-assembly/UsefulButtons";

const Home = () => {
    return (
      <>
        <MainCards />
        <InsurancePrograms />
        <TypesInsurance />
        <AboutUs />
        <News />
        <UsefulButtons />
      </>
    );
}

export default Home;