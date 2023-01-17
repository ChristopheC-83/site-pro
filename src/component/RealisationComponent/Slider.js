import { useContext, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { ImgSliderContext } from "../../context/ImgSliderContext.js";

export default function Slider(props) {
 
  const { imgList } = useContext(ImgSliderContext);

  const [indexImg, setIndexImg] = useState({
    index: 1,
    inProgress: false,
  });


  console.log("longueur : ", imgList.length);
  console.log("index : ", indexImg.index);

  function prevChange() {
    if (indexImg.index === 0) {
      setIndexImg({ index: imgList.length - 1 });
    } else {
      setIndexImg({ index: indexImg.index - 1 });
    }
  }

  function nextChange() {
    if (indexImg.index === imgList.length - 1) {
      setIndexImg({ index: 1 });
    } else {
      setIndexImg({ index: indexImg.index + 1 });
    }
  }

  console.log("image =>", imgList[indexImg.index]);
  return (
    <div className="slider-container">
      <div className="img-frame">
        <img
          src={imgList[indexImg.index]}
          alt=""
        />
      </div>
      <div className="arrow arr-left" onClick={prevChange}>
        <FaArrowCircleLeft />
      </div>
      <div className="arrow arr-right" onClick={nextChange}>
        <FaArrowCircleRight />
      </div>
    </div>
  );
}
