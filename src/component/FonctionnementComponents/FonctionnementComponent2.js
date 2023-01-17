import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import { FaBriefcase } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";

import fonctionnement2 from "../../images/3_Fonctionnement/fonctionnement2_travaux.png";

export default function FonctionnementComponent2() {
  const [toggleImg, setToggleImg] = useState(false);

  const animationImg = useSpring({
    opacity: toggleImg ? 1 : 0,
    transform: toggleImg ? "translateY(0)" : `translateY(75%)`,
    config: { duration: 1000 },
  });
  return (
    <div className="home-content-box home-content-box1 home-content-box2">
      <div className="home-content-text home-content-text1">
        <p>
          J'interviens alors en faisant un métré précis sur place avec les plans
          du cuisiniste. <br />
          <br />
          Nous établissons ensemble qui fait quoi au niveau des travaux
          préparatoires (démontage, adaptation électricité et plomberie...).
          <br />
          <br />
          J'envoie un retour de métré au cuisiniste par mail. La fabrication est
          enfin lancée !
        </p>
        <div className="home-icone">
          <FaPaperPlane />
          <FaArrowCircleRight style={{ margin: "0 40px" }} />
          <FaIndustry />
        </div>
        <p>
          Pendant cette phase préparatoire, même si je ne participe pas
          physiquement aux travaux, je reste joignable pour vous accompagner.
          <br />
          <br /> Mieux la préparation sera faite, moins nous aurons de surprises
          au moment de la pose !
        </p>
        <div className="home-icone">
          <GrUserWorker style={{ margin: "0 40px" }} />
          <FaBriefcase />
          <FaRegThumbsUp style={{ margin: "0 40px" }} />
        </div>
      </div>
      <Waypoint
        bottomOffset="30%"
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
          <img src={fonctionnement2} alt="cuisine" />
        </div>
      </animated.div>
    </div>
  );
}
