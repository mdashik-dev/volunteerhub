import React from "react";
import BannerSlider from "./BannerSlider";
import VolunteerNeedsNow from "./VolunteerNeedsNow";
import VolunteerTestimonials from "./VolunteerTestimonials";
import HowItWorks from "./HowItWorks";

function Home() {
  return (
    <>
      <BannerSlider />
      <VolunteerNeedsNow />
      <VolunteerTestimonials />
      <HowItWorks />
    </>
  )
}

export default Home;
