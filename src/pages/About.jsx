import React from "react";
import HeroAbout from "../components/HeroAbout"; // Adjust the path if needed

const About = () => (
  <div>
    {/* HeroAbout Section */}
    <HeroAbout />

    {/* Additional Section: About Us */}
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>About Us</h2>
      <p>
        PayThai.io is a platform designed to simplify cryptocurrency payments,
        helping local businesses and tourists perform fast, secure, and low-cost
        transactions. Our mission is to streamline financial operations in Thailand
        using modern blockchain technology.
      </p>
    </div>
  </div>
);

export default About;
