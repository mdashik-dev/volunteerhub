import React from "react";
import BannerSlider from "./BannerSlider";
import VolunteerNeedsNow from "./VolunteerNeedsNow";
import VolunteerTestimonials from "./VolunteerTestimonials";
import HowItWorks from "./HowItWorks";
import { Helmet } from "react-helmet-async";
import PopularVolunteerOpportunities from "./PopularVolunteerOpportunities";
import VolunteerImpactStats from "./VolunteerImpactStats";
import UpcomingVolunteerEventsList from "./UpcomingVolunteerEventsList";

function Home() {
  return (
    <>
      <Helmet>
        <title>Volunteer Management</title>
      </Helmet>
      <BannerSlider />
      <VolunteerNeedsNow />
      <PopularVolunteerOpportunities />
      <VolunteerImpactStats />
      <UpcomingVolunteerEventsList />
      <VolunteerTestimonials />
      <HowItWorks />
    </>
  );
}

export default Home;
