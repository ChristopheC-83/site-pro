import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function ContactBar() {
  const [contactbarActive, setContactbarActive] = useState(false);

  function toggleContactbar() {
    setContactbarActive(!contactbarActive);
  }


  return (
    <div className="contactbar-container">
      <div
        className={contactbarActive ? "contactbar-active" : "contactbar-cache"}
        onClick={toggleContactbar}
      >
        <div className="contactbar-content">
          <span className="contactbar-item contactbar-mail">
            <a href="mailto:christophe.chiappetta@gmail.com">
              <FaEnvelope style={{color:"var(--marron)"}}/>
              <p>christophe.chiappetta@gmail.com</p>
            </a>
          </span>
          <span className="contactbar-item contactbar-phone">
            <a href="tel:+33699812296">
              <FaPhoneAlt style={{color:"var(--marron)"}}/>
              <p>06.99.81.22.96</p>
            </a>
          </span>
          <span className="contactbar-item contactbar-insta">
            <a href="https://www.instagram.com/christophe_poseur_cuisines/">
              <div className="contactbar-icone-insta">
                <FaInstagram />
              </div>
            </a>
          </span>
        </div>

        <div className="contactbar-chevron">
          <span className="contactbar-chevron-img1">
            <FaChevronDown />
          </span>
          <h3>contact</h3>
          <span className="contactbar-chevron-img2">
            <FaChevronDown />
          </span>

          <span className="contactbar-tel"></span>
        </div>
      </div>
      <div
        className={
          contactbarActive ? "contactbar-overlay" : "contactbar-overlay-cache"
        }
        onClick={toggleContactbar}
      ></div>
    </div>
  );
}
