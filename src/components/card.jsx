import React from "react";
import FormFill from "./formFill";
const Card = ({image, company, price, details, star, type, id, removeCard}) => {
    const [cardType, setType] = React.useState(type)
    const [showForm, setShowForm] = React.useState(false)

    function toggleForm(){
        setShowForm(prevForm => !prevForm)
    }
    
    return(
        <div className="card">
        <div>
        {showForm ? <FormFill /> : ""}
        </div>
            <img className="card--image"  src={image}/>
            <div className="card--first">
                <h1>{company}</h1>
                <h1>{price}$</h1>
            </div>
            <p className="card--type">{cardType === 1 ? "New" : "Used"}</p>
            <p className="card--details">{details}</p>
            <div className="card--second">
                <p className="card--star">{star}</p>
                <button onClick={() => toggleForm(id)} className="card--btn">Buy</button>
            </div>
                <button onClick={() => removeCard(id)} className="card--remove">Remove</button>
        </div>
    )
}
export default Card