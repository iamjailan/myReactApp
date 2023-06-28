import React from "react";
import Card from "./card";

const Cards = ({removeCard, cardSource}) => {
    const cardEl = cardSource.map(item => {
        return <Card key={item.id} {...item} removeCard={removeCard} />
    })
    return <div className="card--list">
        {cardEl}
    </div>
}

export default Cards