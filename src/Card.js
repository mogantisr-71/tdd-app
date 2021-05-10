import React, { useState, useEffect } from 'react';
import './Card.css';

export const Card = ({name, url}) => {
    const [cardData, setCardData] = useState({id: "",
    name: "",
    image: ""})

    useEffect(() => {
        let desResp;
        async function fetchCardData () {
        const response = await fetch(url);
        desResp = await response.json();
             setCardData({
            id: desResp.id,
            name: desResp.name,
        image: desResp.sprites.front_default
        })
        }
        fetchCardData()

    }, [url])
    return (
        <div className="card">
            <div className="card__header">   
                <p>{cardData.name.toUpperCase()} </p>
                <p>ID: {cardData.id}</p>
            </div>
            <div className="card__image">
                <span className="helper"></span>
                <img src={cardData.image} alt={cardData.name} />
            </div>    
        </div>
    )
}