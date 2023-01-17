
import Entete from "../component/Entete";
import accueilEnteteImg from "../images/Entetes/accueil.png";
import HomeComponent1 from "../component/HomeComponent/HomeComponent1";
import HomeComponent2 from "../component/HomeComponent/HomeComponent2";
import HomeComponent3 from "../component/HomeComponent/HomeComponent3";

export default function Home() {
  // texte entete
  const text1 = "Préparons ensemble la pose";
  const text2 = "de votre nouvelle cuisine.";
  const text3 = "Je vous accompagne";
  const text4 = "tout au long de votre projet.";
  const color = "var(--fonce)";
  // image de fond
  const bgImg = accueilEnteteImg;

 

  return (
    <div className="home-container">
      <Entete
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        bgImg={bgImg}
        color={color}
      />
      <HomeComponent1 />
      <HomeComponent2 />
      <HomeComponent3 />
      
      <div className="home-spacer"></div>
    </div>
  );
}
