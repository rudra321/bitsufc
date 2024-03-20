import React from "react";
import "./Game.css"; // Import the CSS file

function Game() {
  const openTheLink = () => {
    window.open("https://youtu.be/YkMMqOUNyKk?si=WrQ5RLnBksrA5kQO");
  };
  return (
    <section id="Game" className="section-container">
      <div
        style={{
          textAlign: "center",
          color: "darkslateblue",
          fontSize: "30px",
        }}
      >
        <h2>About Ultimate Frisbee</h2>
      </div>

      <div>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            color: "darkslateblue",
          }}
        >
          {" "}
          Whats the Sport ?
        </h3>
      </div>
      <p style={{ fontSize: "18px" }}>
        Ultimate Frisbee, often simply referred to as Ultimate, is a dynamic and
        exhilarating team sport played with a flying disc. Combining elements of
        soccer, football, and basketball, Ultimate is known for its fast-paced
        action, strategic gameplay, and emphasis on sportsmanship.
      </p>

      <div className="game-card-container">
        <div className="game-card">
          <div className="game-card-content">
            <h3>7-on-7 Gameplay</h3>
            <p>
              Ultimate is played with two teams of seven players each on the
              field, making it a fast-paced and intense sport.
            </p>
          </div>
        </div>
        <div className="game-card">
          <div className="game-card-content">
            <h3>Mixed Gender Sport</h3>
            <p>
              Ultimate Frisbee is unique in that it is a mixed gender sport,
              with teams typically having a 4:3 or 3:4 men-to-women ratio on the
              field.
            </p>
          </div>
        </div>
        <div className="game-card">
          <div className="game-card-content">
            <h3>Spirit of the Game</h3>
            <p>
              Emphasizes sportsmanship, fair play, and mutual respect among
              players, making it a unique and inclusive community.
            </p>
          </div>
        </div>
        <div className="game-card">
          <div className="game-card-content">
            <h3>Self-Officiated</h3>
            <p>
              Players are responsible for making their own calls and resolving
              disputes on the field, promoting honesty and integrity.
            </p>
          </div>
        </div>
        <div className="game-card">
          <div className="game-card-content">
            <h3>Athleticism and Strategy</h3>
            <p>
              Requires a combination of physical fitness, agility, and strategic
              thinking, making it an exciting and challenging sport to play.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="watch-vdo-btn-box">
        <button className="btn-game" onClick={openTheLink}>
          Watch the gameplay
        </button>
      </div>
    </section>
  );
}

export default Game;
