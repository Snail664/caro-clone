import React, { useState } from "react";
import Card from "./Cards";
import exploreArray from "./exploreArray.json"



const CardHolder = ()=>{
    const slideRight = ()=>{
        console.log("I slide right")
        setTranslate(translate-=80)
    }
    
    const slideLeft = ()=>{
        console.log("I slide left")
        setTranslate(translate+=80)
    }

    let [translate, setTranslate] = useState(100);

    let style = {transform: `translate(${translate}%)`}//Slider overshoots

    return(
        <div class="cardHolder">
            <div class="sliderArrow leftArrow" onClick={slideLeft}>
                <svg class="arrowSVG leftArrowSVG" fill="#57585a" height="32" role="img" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path></svg>
            </div>

            <div class="cards" style={style}>
                {exploreArray.map((item)=>{
                    return <Card tittle={item.tittle} imageSrc={item.image}/>
                })}
            </div>

            <div class="sliderArrow rightArrow" onClick={slideRight}>
                <svg class="arrowSVG rightArrowSVG" fill="#57585a" height="32" role="img" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path></svg>
            </div>
        </div>

    )
}

export default CardHolder;