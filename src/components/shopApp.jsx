import React from "react";
import "./index.css"
import Navbar from "./navbar";
import Contents from "./contents";
import Card from "./card";
import cardData from "./cardData";
import Ads from "./ads";
import Profile from "./profile";
import profileData from "./profileData";
// import FormFill from "./formFill";
import ChatBox from "./chatBox";
import Feedback from "./feedback";
import Cards from "./cards";

export default function ShopApp(){
    const [cardItems, setCardItems] = React.useState(cardData)
    // const cardEl = cardData.map(card =>{
    //     return <Card 
    //             key={card.id}
    //             {...card}
    //         />
    // })
    const removeCard = (id) => {
        const newCard = cardItems.filter((item) => item.id !== id)
        setCardItems(newCard)
    }

    const profileEl = profileData.map(item =>{
        return(
            <Profile 
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div>
        <Navbar />
        <Contents />
        <h1 className="top--title">Available Computers {cardData.length}</h1>
            <div className="card--list">
                <Cards cardSource={cardItems} removeCard={removeCard} />
            </div>
            <ChatBox />
            <Ads />
            <Feedback />
            <h1 className="top--title benz--top">Development Team</h1>
            <div className="profile--list">
                 {profileEl}
            </div>
        </div>
    )
}