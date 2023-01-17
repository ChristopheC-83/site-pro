import React from 'react'
import Entete from '../component/Entete'
import FonctionnementComponent1 from "../component/FonctionnementComponents/FonctionnementComponent1";
import FonctionnementComponent2 from "../component/FonctionnementComponents/FonctionnementComponent2";
import FonctionnementComponent3 from "../component/FonctionnementComponents/FonctionnementComponent3";


import fonctionnementEnteteImg from "../images/Entetes/fonctionnement.png"

export default function Fonctionnement() {

    // texte entete
    const text1="Comment faire ?"
    const text2="Par où commencer ?"
    const text3="Je vous explique ça !"
    const text4="On va essayer d'éviter les surprises..."
    const color="var(--clair)"
    // image de fond
    const bgImg = fonctionnementEnteteImg
  return (
    <div>
      <Entete 
      text1={text1}
      text2={text2}
      text3={text3}
      text4={text4}
      bgImg={bgImg}
      color={color}
      />
      <FonctionnementComponent1/>
      <FonctionnementComponent2/>
      <FonctionnementComponent3/>

      <div className="home-spacer"></div>
    </div>
  )
}
