import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import imgAccueil3 from "../../images/1_Home/accueil3.png";
import { FaListAlt } from "react-icons/fa";

import { FaMoneyBillWave } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";

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
    <div className="home-content-box home-content-box1">
      <div className="home-content-text home-content-text1">
        <p>
          Dans le but de répondre le plus précisément possible à vos besoins,
          vous choisissez vos prestations au travers d'une grille tarifaire que
          je souhaite simple et la plus exhaustive possible.
        </p>
        <div className="home-icone">
          <FaListAlt />
        </div>
        <p>
          {" "}
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"14px" }} />
          Je peux gérer la pose complète, les éventuels travaux
          complémentaires,
        </p>
        <div className="home-icone">
          <FaMoneyBillWave style={{ margin: "0 30px" }} />
          <FaMoneyBillWave />
          <FaMoneyBillWave style={{ margin: "0 30px" }} />
        </div>
        <p>
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"14px" }} />
          Ou juste changer les plans de travail avec remise en service de
          l'évier et de la plaque de cuisson pour un coup de jeune de votre
          cuisine,
        </p>
        <div className="home-icone">
          <FaMoneyBillWave style={{ margin: "0 30px" }} />

          <FaMoneyBillWave style={{ margin: "0 30px" }} />
        </div>
        <p>
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"14px" }} />
          ou vous proposer une journée d'aide à la pose pour laquelle vous
          aurez préparé le terrain et qui permettra une facture plus légère !
        </p>
        <div className="home-icone">
          <FaPiggyBank />
        </div>
        <p>
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize:"14px" }}  />
          Mon offre se veut la plus complète et détaillée possible pour que vous
          puissiez cibler vos priorités. Le principal reste la communication et
          la préparation. Je m'engage à ne laisser aucune question sans réponse.
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
          <img src={imgAccueil3} alt="cuisine" />
        </div>
      </animated.div>
    </div>
  );
}
