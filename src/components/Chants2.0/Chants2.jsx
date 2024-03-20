import React from "react";
import "./Chants2.css"; // Import the CSS file

function Chants2() {
  const openTheLink = () => {
    window.open("https://youtu.be/YkMMqOUNyKk?si=WrQ5RLnBksrA5kQO");
  };
  return (
    <section id="Chants" className="section-container">
      <div
        style={{
          textAlign: "center",
          color: "darkslateblue",
          fontSize: "30px",
        }}
      >
        <h2>Chants</h2>
      </div>

      
      <p style={{ fontSize: "18px" }}>
      <b>Chants in Ultimate Frisbee?</b> They're the turbo boosters of team spirit! Imagine a squad of players, arms around each other, belting out cheers that could rival a rock concert. It's not just noise—it's the secret sauce that fires up players and gets fans roaring. From silly chants to spine-tingling battle cries, these vocal shenanigans aren't just for show—they're the fuel that propels teams to victory in the wild and wonderful world of Ultimate Frisbee!
      </p>
      <div>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            color: "darkslateblue",
          }}
        >
          {" "}
          Aarambh Hai Prachand
        </h3>
      </div>
      <div className="game-card-container">
        <div className="game-card">
          <div className="game-card-content">
            <h3>Title Meaning</h3>
            <p>
            "Aarambh Hai Prachand" translates to "The Beginning is Fierce"
                in English. The word "Prachand" means fierce or intense.
            </p>
          </div>
        </div>
        <div className="game-card">
          <div className="game-card-content">
            <h3>Context</h3>
            <p>
            The song is used in the movie "Gulaal" during a crucial
                sequence. It's a powerful anthem that reflects the intensity and
                passion of the characters as they strive for change.
            </p>
          </div>
        </div>
        <div className="game-card">
          <div className="game-card-content">
            <h3>Symbolism</h3>
            <p>
            It speaks of the fire within individuals, the strength of unity,
                and the unstoppable force of change.
            </p>
          </div>
        </div>
        <div className="game-card">
          <div className="game-card-content">
            <h3>Impact</h3>
            <p>
            The song's intense and energetic composition, coupled with
                meaningful lyrics, evokes strong emotions in listeners.
            </p>
          </div>
        </div>
        <div className="game-card">
          <div className="game-card-content">
            <h3>Call to Action</h3>
            <p>
            "Aarambh Hai Prachand" serves as a call to action, urging people
                to rise up with courage, determination and challenge the
                impossibles.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="watch-vdo-btn-box">
        <button className="btn-game" onClick={openTheLink}>
          Original Song
        </button>
      </div>
    </section>
  );
}

export default Chants2;
