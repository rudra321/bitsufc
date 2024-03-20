import { Widgets } from "@mui/icons-material";
import "./Chants.css";
function Chants() {
  const openTheVideo = () => {
    window.open("https://youtube.com/clip/Ugkxm3pQw9QMB_xzxD9KS4Uax4JwHKdNyV1W?si=cTDj29TnzMVoI-M1")
  }
  return (
    <div id='Chants' className="section-container">
      <div
        style={{
          textAlign: "center",
          fontSize: "30px",
          color: "darkslateblue",
        }}
      >
        <h2>Chants</h2>
      </div>
      <div className="section">
        <div className="song-content">
        <h2 className="heading">
            <b style={{color:'darkslateblue'}}>आरम्भ है प्रचंड</b>
          </h2>
          <div className="song-meaning">
            <div className="meaning-section">
              <h3>Title Meaning</h3>
              <p>
                "Aarambh Hai Prachand" translates to "The Beginning is Fierce"
                in English. The word "Prachand" means fierce or intense.
              </p>
            </div>
            <div className="meaning-section">
              <h3>Context</h3>
              <p>
                The song is used in the movie "Gulaal" during a crucial
                sequence. It's a powerful anthem that reflects the intensity and
                passion of the characters as they strive for change.
              </p>
            </div>
            <div className="meaning-section">
              <h3>Symbolism</h3>
              <p>
                It speaks of the fire within individuals, the strength of unity,
                and the unstoppable force of change.
              </p>
            </div>
            <div className="meaning-section">
              <h3>Call to Action</h3>
              <p>
                "Aarambh Hai Prachand" serves as a call to action, urging people
                to rise up with courage, determination and challenge the
                impossibles.
              </p>
            </div>
            <div className="meaning-section">
              <h3>Impact</h3>
              <p>
                The song's intense and energetic composition, coupled with
                meaningful lyrics, evokes strong emotions in listeners.
              </p>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
      <div className="watch-vdo-btn-box"><button className="btn-game" onClick={openTheVideo}>  
          Listen to the chant here
      </button></div>
    </div>
  );
}
export default Chants;
