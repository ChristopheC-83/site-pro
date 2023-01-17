import React from 'react'
import Entete from '../component/Entete'
import RealComp1 from '../component/RealisationComponent/RealComp1'
import realisationsEnteteImg from "../images/Entetes/realisations.png"

export default function Realisations() {

    // texte entete
    const text1="Pour s'inspirer"
    const text2="et se projeter."
    const text3="voici quelques réalisations"
    const text4="montées par mes soins."
    const color="var(--clair)"
    // image de fond
    const bgImg = realisationsEnteteImg

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
    <RealComp1/>
    </div>
  )
}
