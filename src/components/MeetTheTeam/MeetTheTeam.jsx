import React, { useState } from "react";
import "./MeetTheTeam.css";
import teamData from "./team.json"; 
import defaultImg from "../../assets/bitsufc.jpg";

function MeetTheTeam() {
  const [selectedYear, setSelectedYear] = useState(""); 

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredTeamData = teamData.filter(
    (member) => member.batchYear === selectedYear
  );

  const shuffledFilteredTeamData = [...filteredTeamData].sort(
    () => Math.random() - 0.5
  );

  return (
    <section id="meet-the-team" className="team-container">
      <div className="roster-title">
        <h2>Roster</h2>
      </div>
      <div className="dropdown-container">
        <select
          className="year-dropdown"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="">Select Batch Year</option>
          {[...Array(14)].map((_, index) => {
            const year = 2011 + index;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <div className="team-members-container">
        {shuffledFilteredTeamData.map((member) => (
          <div key={member.id} className="team-member">
            <div className="member-card">
              <div className="member-img-container">
                <img
                  src={member.image ? member.image : defaultImg}
                  alt={member.name}
                />
              </div>
              <div className="member-details">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p style={{ color: "darkslateblue" }}>{member.name}</p>
                  <p>{member.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeetTheTeam;
