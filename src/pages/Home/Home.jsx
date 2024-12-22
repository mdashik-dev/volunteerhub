import React from "react";
import BannerSlider from "./BannerSlider";
import VolunteerNeedsNow from "./VolunteerNeedsNow";
import VolunteerTestimonials from "./VolunteerTestimonials";
import HowItWorks from "./HowItWorks";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Volunteer Management</title>
      </Helmet>
      <BannerSlider />
      <VolunteerNeedsNow />
      <VolunteerTestimonials />
      <HowItWorks />
    </>
  );
}

export default Home;
