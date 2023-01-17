import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import price2 from "../../images/4_price/price_help2.png";
import { FaArrowCircleRight } from "react-icons/fa";

export default function TarifComponents2() {
  const [toggleImg, setToggleImg] = useState(false);

  const animationImg = useSpring({
    opacity: toggleImg ? 1 : 0,
    transform: toggleImg ? "translateY(0)" : `translateY(75%)`,
    config: { duration: 1000 },
  });

  return (
    <div className="home-content-box home-content-box1 home-content-box2">
      <div className="home-content-text home-content-text1">
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          La journée d'aide à la pose :
        </p>

        <p>
          Une journée d'aide à la pose 
          <br />
          se compte 400€ HT : <br />
          <br />
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"16px" }} />Vous déballez les éléments, préparez les meubles (pieds, retrait de
          toutes les façaces, mise en place, niveau approximatif), l'évier, les
          poignées...
          <br />
          <br />
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"16px" }} />Nous faisons ensemble ce qui vous gêne le plus, pas de soucis ! <br />
          <br />
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"16px" }} />Je m'occupe de la jonction des caissons, remise à niveau, fixations
          murales, jonction et découpe des plans de travail, installation et
          branchement de l'évier et des électro-ménagers...
          <br />
          <br /> <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"16px" }} />Vous gérez l'évacuation des cartons et autres emballages.
          <br />
          <br />
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"16px" }} />Nous faisons en sorte que la cuisine soit le plus avancée possible (et
          surtout fonctionnelle) sur cette journée en fonction de vos besoins et
          compétences.
        </p>
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
          <img src={price2} alt="cuisine" />
        </div>
      </animated.div>
    </div>
  );
}
