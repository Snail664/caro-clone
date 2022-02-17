import React, { useState } from "react";
import Card from "./Cards";
import exploreArray from "./exploreArray.json"



const CardHolder = ()=>{
    

    
    const slideRight = ()=>{
        //let a = document.getElementById("cards-id").offsetWidth;
        //console.log(a);
        console.log("I slide right")
        slideTo(true)
    }
    
    const slideLeft = ()=>{
        //console.log(typeof(a));
        console.log("I slide left")
        slideTo(false)
    }

    const slideTo = (isRight) => {
        let totalWidth = document.getElementById("cards-id").offsetWidth;
        let viewWidth = document.getElementById("cardHolder-id").offsetWidth;
        let maxTrasition = totalWidth-viewWidth;
        let totalSlide = Math.ceil(totalWidth/viewWidth);
        let currentSlide = Math.ceil(translate/viewWidth);

        let leftArrow = document.getElementById("leftArrow")
        let rightArrow = document.getElementById("rightArrow")

        leftArrow.style.display = "";
        rightArrow.style.display = "";
        //console.log(totalWidth)
        //console.log(viewWidth)
        //console.log(translate)
        //console.log(maxTrasition)
        //console.log(totalSlide)
        //console.log(currentSlide)

        if(isRight){
            if(currentSlide+1<totalSlide) currentSlide++
        } else {
            if(currentSlide>0) currentSlide--
        }

        if(currentSlide+1 === totalSlide) rightArrow.style.display="none"
        if(currentSlide === 0) leftArrow.style.display="none"

        if(currentSlide+1===totalSlide) setTranslate(maxTrasition)
        else {
            setTranslate(currentSlide*viewWidth);
        }
        console.log(currentSlide)
    }

    

    let [translate, setTranslate] = useState(0);

    let style = {transform: `translate(-${translate}px)`}//Slider overshoots

    return(
        <div class="cardHolder" id="cardHolder-id">
            <div class="sliderArrow leftArrow" id="leftArrow" style={{display:"none"}} onClick={slideLeft}>
                <svg class="arrowSVG leftArrowSVG" fill="#57585a" height="32" role="img" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path></svg>
            </div>

            <div class="cards" id="cards-id" style={style}>
                {exploreArray.map((item)=>{
                    return <Card tittle={item.tittle} imageSrc={item.image}/>
                })}
            </div>

            <div class="sliderArrow rightArrow" id="rightArrow" onClick={slideRight}>
                <svg class="arrowSVG rightArrowSVG" fill="#57585a" height="32" role="img" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path></svg>
            </div>
        </div>

    )
}

export default CardHolder;