import React, { useEffect, useState } from "react";
import "./gallery.css";
import Arrow from "./Arrow";

const IMAGES = [
  "https://media.karousell.com/media/photos/special-collections/2020/09/14/Regional_SMC-AirCon_M_(1500,_610).png",
  "https://media.karousell.com/media/photos/special-collections/2020/08/03/property_sept_spc2_(1500,_610).png",
  "https://media.karousell.com/media/photos/special-collections/2020/08/12/SG_CBP_Referral-2_M_(1500,_610).png",
];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const totImages = IMAGES.length;

  const onNext = () => {
    setIndex((curr) => (curr + 1 == totImages ? 0 : curr + 1));
  };

  const onPrev = () => {
    setIndex((curr) => (curr - 1 == -1 ? totImages - 1 : curr - 1));
  };

  const getNext = () => {
    return (index + 1) % 3;
  };

  return (
    <div>
      <div className="container">
        <div className="img-container">
          <img src={`${IMAGES[index]}`} alt="some ad" />
        </div>

        <div className="img-container">
          <img src={`${IMAGES[getNext()]}`} alt="some ad" />
        </div>
        {index !== 0 ? (
          <div className="left" onClick={onPrev}>
            <Arrow direction="left" />
          </div>
        ) : null}
        {index !== totImages - 1 ? (
          <div className="right" onClick={onNext}>
            <Arrow direction="right" className="right" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Gallery;
