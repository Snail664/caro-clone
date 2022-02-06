import React from "react";

//TODO: Add Animation jumping 

const Card = ({tittle, imageSrc})=>{
    return(
        <div class="card">
            <img src={imageSrc} alt="Hello"></img>
            <p>{tittle}</p>
        </div>
    )
}

export default Card;