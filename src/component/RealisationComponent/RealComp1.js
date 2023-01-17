import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import instaPict from "../../images/insta.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import ImgSliderContextProvider from "../../context/ImgSliderContext";
import Slider from "./Slider";

export default function RealComp1() {
  const [toggleImg, setToggleImg] = useState(false);

  const animationImg = useSpring({
    opacity: toggleImg ? 1 : 0,
    transform: toggleImg ? "translateY(0)" : `translateY(75%)`,
    config: { duration: 1000 },
  });
  return (
    <div>
      <div className="home-content-box home-content-box1">
        <div className="home-content-text home-content-text1">
          <p>
            Afin de suivre mes dernières réalisations, je vous propose, pour
            commencer d'aller jeter un oeil à mon compte Instagram.
          </p>
          <a href="https://www.instagram.com/christophe_poseur_cuisines/">
            <FaInstagram
              style={{
                fontSize: "50px",
                margin: "0 10px",
                color: "var(--rose)",
              }}
            />
          </a>

          <p>
            Ou en restant sur ce site, plus simplement, vous pouvez regarder
            déjà quelques photos.
          </p>
          <p>
            Les flèches
            <FaArrowCircleLeft
              style={{ fontSize: "20px", margin: "-5px 5px" }}
            />
            <FaArrowCircleRight
              style={{ fontSize: "20px", margin: "-5px 5px" }}
            />
            vous permettent de voir différentes vues et différentes cuisines.
          </p>
          <p>Et vous, laquelle vous inspire ?</p>
          

          

          <p>Bon visionnage !</p>
        </div>
        <Waypoint
        bottomOffset="50%"
        onEnter={() => {
          console.log("c'est waypointé!");

          setToggleImg(true);
        }}
      />

      <animated.div
        style={animationImg}
        className="home-content-img home-content-img1"
      >
        <div className="home-img">
          <a href="https://www.instagram.com/christophe_poseur_cuisines/"><img src={instaPict} alt="cuisine" /></a>
        </div>
      </animated.div>
      </div>
      <div>
        <ImgSliderContextProvider>
          <Slider />

        </ImgSliderContextProvider>
        <div className="spacer"></div>
      </div>
    </div>
  );
}
