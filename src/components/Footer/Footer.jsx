import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Email } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <section id="contact" className="contact-section">


        <div className="contact-icons">
          <p>
            <a href="https://www.facebook.com/bitsufc/">
              <Facebook sx={{ fontSize: 45 }} />
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/bitsufc">
              <Instagram sx={{ fontSize: 45 }} />
            </a>
          </p>
          <p>
            <a href="mailto:bitsufc@gmail.com">
              <Email sx={{ fontSize: 45 }} />
            </a>
          </p>
        </div>
      </section>
      <p style={{ display: 'flex', justifyContent: 'center' }}>
        &copy; {new Date().getFullYear()} <span style={{ marginRight: '5px',marginLeft: '5px' }}>BITS UFC.</span> <span style={{color:'#333'}}>All rights reserved.</span>
      </p>

    </footer>
  );
}

export default Footer;
