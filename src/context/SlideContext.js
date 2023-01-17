import { createContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const SlideContext = createContext();

const SlideContextProvider = (props) => {

    function slideHorizontalScroll(elemEnfant, elemParent, markers) {
        const coordsParent = elemParent.getBoundingClientRect();
        // console.log(coordsParent);
        const coordsEnfant = elemEnfant.getBoundingClientRect();
        // console.log(coordsEnfant);
        const glissementH = (coordsParent.width - coordsEnfant.width);
        // console.log(glissementH);
    
        gsap.fromTo(
          elemEnfant,
          {
            x: glissementH,
          },
          {
            x:0,
            delay: 0.5,
            duration: 2.5,
            scrollTrigger: {
              trigger: elemParent,
              start: "top 50%",
              end: "bottom 50%",
              markers: markers,
              scrub: 0,
            },
          }
        );
      }

      function slideVerticalScroll(elemEnfant, elemParent, markers) {
        const coordsParent = elemParent.getBoundingClientRect();
        console.log(coordsParent);
        const coordsEnfant = elemEnfant.getBoundingClientRect();
        console.log(coordsEnfant);
        const glissementV = (coordsParent.height - coordsEnfant.height) / 2;
        console.log(glissementV);
    
        gsap.fromTo(
          elemEnfant,
          {
            y: - 0.75 * glissementV,
          },
          {
            y: 0.75 * glissementV,
            delay: 0.5,
            duration: 2.5,
    
            scrollTrigger: {
              trigger: elemParent,
              start: "top 50%",
              end: "bottom 50%",
              markers: markers,
              scrub: 0,
            },
          }
        );
      }







return (
    <SlideContext.Provider value={{slideHorizontalScroll, slideVerticalScroll}}>
      {props.children}
    </SlideContext.Provider>
  );
};

export default SlideContextProvider;