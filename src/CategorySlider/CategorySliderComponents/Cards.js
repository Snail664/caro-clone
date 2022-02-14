import React from "react";

//TODO: Add Animation jumping 

const Card = ({tittle, imageSrc})=>{
    return(
        <div class="card">
            <div class="cardContent">
                <img src={imageSrc} alt="Hello"></img>
                <p>{tittle}</p>
            </div>
        </div>
    )
}

export default Card;