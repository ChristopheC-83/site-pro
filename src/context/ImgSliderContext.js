import { createContext } from "react";
import C1 from "../images/2_realisations/C1.jpg"
import C2 from "../images/2_realisations/C2.jpg"
import C3 from "../images/2_realisations/C3.jpg"
import C4 from "../images/2_realisations/C4.jpg"
import C5 from "../images/2_realisations/C5.jpg"
import C7 from "../images/2_realisations/C7.jpg"
import C8 from "../images/2_realisations/C8.jpg"
import C9 from "../images/2_realisations/C9.jpg"
import C10 from "../images/2_realisations/C10.jpg"
import C11 from "../images/2_realisations/C11.jpg"
import C12 from "../images/2_realisations/C12.jpg"
import C13 from "../images/2_realisations/C13.jpg"
import C14 from "../images/2_realisations/C14.jpg"
import C15 from "../images/2_realisations/C15.jpg"
import C16 from "../images/2_realisations/C16.jpg"
import C17 from "../images/2_realisations/C17.jpg"
import C18 from "../images/2_realisations/C18.jpg"
import C19 from "../images/2_realisations/C19.jpg"


export const ImgSliderContext = createContext();

const ImgSliderContextProvider = (props) => {

  const imgList = [C1, C2, C3, C4, C5, C7, C8,C9, C10, C11, C12, C13, C14, C15, C16, C17, C18,C19];
const testtruc = "coucoutruc"


return(
    <ImgSliderContext.Provider value={{testtruc, imgList}}>
            {props.children}

    </ImgSliderContext.Provider>
    )
}

export default ImgSliderContextProvider
  