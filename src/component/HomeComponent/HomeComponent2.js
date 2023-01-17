import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";import imgAccueil2 from "../../images/1_Home/accueil2.png";
import { FaHammer } from "react-icons/fa";
import { FaFaucet } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";
import { FaRulerCombined } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { FaScrewdriver } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export default function HomeComponent2() {

  const [toggleImg, setToggleImg] = useState(false);

  const animationImg = useSpring({
    opacity: toggleImg ? 1 : 0,
    transform: toggleImg ? "translateY(0)" : `translateY(75%)`,
    config: { duration: 1000 },
  });
  

  return (
    <div className="home-content-box home-content-box1 home-content-box2">
      <div className="home-content-text home-content-text1">
        <p>Afin de vous accompagner au mieux, je peux prendre en charge :</p>
        <div className="home-icone">
          <FaHammer />
        </div>
        <p>
          
        <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"16px" }} />
          le demontage de l'ancienne cuisine et son évacuation à la déchetterie.
        </p>
        <div className="home-icone">
          <FaFaucet style={{ margin: "0 30px" }} />
          <FaPlug style={{ margin: "0 30px" }} />
        </div>
        <p>
        <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"16px" }} />
          le déplacement de l'électricité et/ou de la plomberie existante(s).
        </p>
        <div className="home-icone">
          <FaRulerCombined style={{ margin: "0 30px" }} />
          <FaMap />
          <FaDraftingCompass style={{ margin: "0 30px" }} />
        </div>
        <p>
        <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"16px" }} />
          le métré de validation avec les plans de votre cuisiniste.
        </p>
        <div className="home-icone">
          <FaScrewdriver style={{ margin: "0 30px" }} />
          <FaToolbox />
          <FaWrench style={{ margin: "0 30px" }} />
        </div>
        <p>
        <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"16px" }} />
          et bien évidemmment le montage de la nouvelle cuisine (en kit ou
          montée d'usine)
        </p>
        <div className="home-icone">
          <FaCheckSquare />
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
          <img src={imgAccueil2} alt="cuisine" />
        </div>
      </animated.div>
    </div>
  );
}
