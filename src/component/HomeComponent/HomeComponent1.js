import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import imgAccueil1 from "../../images/1_Home/accueil1.png";
import { FaUserAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

export default function HomeComponent1() {
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
          Installé à mon compte depuis mai 2015, je vous apporte mon expérience
          et vous propose mes services autour de Nîmes. <br />
          <br /> Entre Remoulins et Montpellier et de Arles à Alès.
        </p>
        <div className="home-icone">
          <FaUserAlt />
        </div>
        <div className="home-icone">
          <FaHandshake />
        </div>
        <div className="home-icone">
          <FaUserAlt style={{ margin: "0 30px" }} />
          <FaUserAlt style={{ margin: "0 30px" }} />
        </div>
        <p>
          Je reste présent et disponible dans le montage de votre projet en
          collaboration avec des enseignes partenaires.
        </p>
        <p>
          Je ne vends pas les cuisines, mais ferai mon possible pour qu'il se
          déroule dans les meilleures conditions possibles pour un résultat
          optimal.
        </p>
        <div className="home-icone">
          <FaTrophy />
          <FaTrophy style={{ transform: "scale(1.5)", margin: "0 30px" }} />
          <FaTrophy />
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
          <img src={imgAccueil1} alt="cuisine" />
        </div>
      </animated.div>
    </div>
  );
}
