import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Entete(props) {
  const enteteTitle1 = useRef();
  const enteteTitle2 = useRef();

  function titleSlide(elem, delay) {
    gsap.from(elem, {
      y: 50,
      opacity:0,
      duration: 1.5,
      scale:0.8,
      delay: delay,
    });
  }

  useEffect(()=>{
    titleSlide(enteteTitle1.current, 0.25)
  }, [])
  useEffect(()=>{
    titleSlide(enteteTitle2.current,0.5)
  }, [])

  return (
    <div className="entete" style={{ backgroundImage: `url(${props.bgImg})` , color:`${props.color}`}}>
      <div className="entete-title">
        <h1 className="entete-title-text entete-title-text1" ref={enteteTitle1}>
          <span className="entete-span entete-title-text1-span1">
            {props.text1}
          </span>
          <span className="entete-span entete-title-text1-span2">
            {props.text2}
          </span>
        </h1>
        <h2 className="entete-title-text entete-title-text2" ref={enteteTitle2}>
          <span className="entete-span entete-title-text2-span1">
            {props.text3}
          </span>
          <span className="entete-span entete-title-text2-span2">
            {props.text4}
          </span>
        </h2>
      </div>
    </div>
  );
}
