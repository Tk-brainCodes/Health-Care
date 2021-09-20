import React from "react";
import "./Onboarding.css";

//add import for a pure html spinner while content loads;

const Onboarding = ({ className }) => {
  return (
    <section className={`Onboarding ${className}`}>
      <iframe
        title="Onboarding"
        className={`Onboarding__iframe`}
        src="https://quabbly.live/eca080f1-8152-4623-984c-ddbd4ca98132"
        // height="100vh"
        frameborder="0"
        width="100%"
      ></iframe>
    </section>
  );
};

export default Onboarding;
