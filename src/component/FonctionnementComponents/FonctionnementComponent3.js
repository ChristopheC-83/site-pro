import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";import { FaTrophy } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaEquals } from "react-icons/fa";
import fonctionnement3 from "../../images/3_Fonctionnement/fonctionnement3_handshake.jpg";

export default function FonctionnementComponent3() {

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
        Même si j'ai pu être face à de très nombreuses marques, une cuisine est le fruit de la collaboration de plusieurs intervenants.<br />
          <br /> Du vendeur(.se), au fournisseur puis au livreur et enfin au poseur.
        </p>
        <div className="home-icone">
          <FaUserTie />
          <FaUsers style={{ margin: "0 40px" }} />
          <FaUserCog />
          
          
        </div>
        <div className="home-icone"><FaEquals /></div>
        <div className="home-icone"><FaTrophy style={{ margin: "0 30px", transform:"scale(1.5)"  }} /></div>
        <p>
        Tout ce petit monde s'active de concert pour une réussite de votre projet. <br />
          <br />J'ai le plaisir et loisir de pouvoir choisir les enseignes avec qui je travaille. <br />
          <br />Soit nous partageons les mêmes valeurs humaines et commerçantes.... soit j'en change ! <br />
          <br />A ce jour, je collabore essentiellement avec :
        </p>
        
        <div className="partners">
          <div className="partner partner2"><a href="https://www.lapeyre.fr/tous-les-magasins/magasin-lapeyre-languedoc-roussillon-nimes">Lapeyre Nîmes</a></div>
          <div className="partner partner3"><a href="https://magasins.ixina.fr/fr/magasins/france-fra/arles/ixina-arles-IXFR1304">Ixina Arles</a></div>


        </div>
        <p  style={{ fontWeight: "bold", textAlign: "center" }}>Parce qu'une équipe soudée est plus efficace !</p>
        
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
          <img src={fonctionnement3} alt="cuisine" />
        </div>
      </animated.div>
    </div>
  );
}
