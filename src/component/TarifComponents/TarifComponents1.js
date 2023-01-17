import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import price1 from "../../images/4_price/price1.jpg";
import { FaReceipt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCommentsDollar } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";

export default function TarifComponents1() {
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
          Notre collaboration peut également se faire en direct. Situé dans la
          Vaunage, j'interviens de Montpellier Est à Remoulin et de Alès à
          Arles. <br />
          <br /> De la même manière, un métré de validation et un devis pour des
          travaux préparatoires sont possibles. <br />
          <br />
          Pour ce qui est du montage de la cuisine, une grille tarifaire
          interactive est disponible sur simple demande par mail à :<br />
          <br />
          <a href="mailto:christophe.chiappetta@gmail.com">
            christophe.chiappetta@gmail.com
          </a><br /><br />

          ou en téléchargement  :
          <a href="https://docs.google.com/spreadsheets/d/1hCvG2il1uTJ-siClwEo-MCpMSWOtEk5J/edit?usp=share_link&ouid=107187922781976477794&rtpof=true&sd=true" download="Grille Tarifaire.xls" target="_blank"
            rel="noreferrer"> Grille tarifaire</a>

        </p>

        <div className="home-icone">
          <FaMapMarkedAlt style={{ margin: "0 30px" }} />
          <FaReceipt style={{ margin: "0 30px" }} />
        </div>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          D'une prestation complète à une journée d'aide à la pose, je suis à
          vos cotés en fonction de vos besoins.
        </p>

        <div className="home-icone">
          <FaMoneyBillWave />
          <FaCommentsDollar
            style={{ transform: "scale(1.5)", margin: "0 40px" }}
          />
          <FaMoneyBillWave />
        </div>
        <p>
          Une pose complète s'étend en général de 750 à 1200€ HT. <br/><br/>
           Tout reste fonction de la cuisine évidemment.  <br/><br/>
          Je vous propose un tarif estimé à partir de vos plans et
          préalable que nous ajustons sur ce qui est fait réellement.  <br/><br/>
          Si finalement vous souhaitez gérer les cartons et emballages,votre
          lave-vaisselle n'est plus intégrable mais en pose libre et vous vous
          sentez de le positionner et brancher... pas de soucis, on le retire !
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
          <img src={price1} alt="cuisine" />
        </div>
      </animated.div>
    </div>
  );
}
