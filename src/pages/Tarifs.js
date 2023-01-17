import React from 'react'
import Entete from '../component/Entete'
import TarifComponents1 from '../component/TarifComponents/TarifComponents1'
import TarifComponents2 from '../component/TarifComponents/TarifComponents2'
import tarifsEnteteImg from "../images/Entetes/tarifs.png"

export default function Tarifs() {
  // texte entete
  const text1="Pose complète ?"
  const text2="Aide à la pose ?"
  const text3="Avec ou sans préparations ?"
  const text4="Un tarif transparent et détaillé."
  const color="var(--fonce)"
  // image de fond
  const bgImg = tarifsEnteteImg
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
      <TarifComponents1/>
      <TarifComponents2/>
      
      <div className="home-spacer"></div>
    </div>
  )
}
