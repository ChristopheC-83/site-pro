import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaCompass } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";
import fonctionnement1 from "../../images/3_Fonctionnement/fonctionnement1_mesure.png";

export default function FonctionnementComponent1() {
  const [toggleImg, setToggleImg] = useState(false);

  const animationImg = useSpring({
    opacity: toggleImg ? 1 : 0,
    transform: toggleImg ? "translateY(0)" : `translateY(75%)`,
    config: { duration: 1000 },
  });
  return (
    <div className="home-content-box home-content-box1">
      <div className="home-content-text home-content-text1">
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          On ne se lance pas à l'improviste <br /> dans un tel projet !
        </p>
        <div className="home-icone">
          <HiMagnifyingGlass style={{ margin: "0 40px" }} />
          <FaCompass />
          <HiMagnifyingGlass style={{ margin: "0 40px" }} />
        </div>
        <p>
          Commencez par prendre les côtes de votre pièce, les fenêtres,
          portes... quelques photos... <br /><br />Et allez trouver votre cuisiniste préféré !
        </p>
        <div className="home-icone">
          <FaPencilRuler style={{ margin: "0 40px" }} />
          <FaArrowCircleRight />
          <FaUserTie style={{ margin: "0 40px" }} />
        </div>
        <p>
          Vous établierez ensemble une implantation répondant à vos envies, vos
          contraintes et votre budget.
        </p>
        <div className="home-icone">
          <FaTv style={{ margin: "0 40px" }} />
          <FaArrowCircleRight />
          <FaRegMap style={{ margin: "0 40px" }} />
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
          <img src={fonctionnement1} alt="cuisine" />
        </div>
      </animated.div>
    </div>
  );
}
