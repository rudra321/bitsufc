import React from "react";
import "./Stats.css";
import vdo from "../../assets/vdo-1.mp4";

function Stats() {
  const currYear = new Date().getFullYear();
  const timenow = currYear - 2011;
  return (
    <section className="stats-container">
      <video autoPlay muted loop className="vdo-player">
        <source src={vdo} type="video/mp4" />
      </video>
      <div className="text-overlay">
        <h2>100+ Team Members</h2>
        <p>{timenow} years and counting</p>
      </div>
    </section>
  );
}
export default Stats;
