import React from "react";
import "./About.css"; // Import the CSS file
import ourimage from "../../assets/bitsufc-2.jpg";

function About() {
  return (
    <section id="About" className="about-section">
      <div className="section-title-main">
        <h2 style={{display:'flex', justifyContent:'center'}}>About Us</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to the <b>BITS Pilani Ultimate Frisbee Club</b>  a.k.a  <b>BITS UFC</b>, where passion meets
            competition! Established in 2007, we are the leading frisbee team at
            BITS Pilani Goa, dedicated to pushing the boundaries of excellence
            and representing our college with pride. <br /> <br />
          </p>
        </div>
        <div className="image-container">
          <img src={ourimage} alt="Frisbee" className="frisbee-image" />
        </div>
      </div>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <span className="section-title">Our Mission</span>
      </div>
      <p>
        At BITS Pilani Frisbee Club, our mission is to elevate the standard of
        frisbee and showcase the talent and dedication of our players. We are
        committed to fostering a culture of excellence, sportsmanship, and
        camaraderie both on and off the field. <br /> <br />
      </p>
      <div style={{ textAlign: "center" }}>
        <span className="section-title">Our Values</span>
      </div>
      <p>
        <b>Passion - </b> We are driven by our love for the game, pouring our
        hearts and souls into every practice and competition. <br></br>
        <br></br>
        <b>Commitment - </b> We are committed to continuous improvement,
        constantly pushing ourselves to reach new heights of skill and
        performance.
        <br></br>
        <br></br>
        <b>Unity - </b> We stand united as a team, supporting and
        uplifting each other through every challenge and triumph.
        <br></br>
        <br></br>
        <b>Respect - </b> We respect our opponents, officials, and fellow
        players, upholding the values of fair play and sportsmanship at all
        times.
        <br /> <br />
      </p>
      <div style={{ textAlign: "center" }}>
        <span className="section-title">
          Join Us (Only for BITS Goa students)
        </span>
      </div>
      <p>
        Think you have what it takes to be part of our winning team? We welcome
        players of all skill levels who share our passion for frisbee and our
        commitment to success. Whether you're a seasoned veteran or new to the
        game, there's a place for you in our club.
      </p>
    </section>
  );
}

export default About;
