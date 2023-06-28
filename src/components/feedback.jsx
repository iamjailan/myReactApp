import React from "react";

export default function Feedback(){
    const [feedback, setFeedback] = React.useState({
        name: "",
        email: "",
        textarea: ""
    })
    function handleChange(e){
        setFeedback(prevFeedback => {
            const {name, value} = e.target
            return{
                ...prevFeedback,
                [name] : value
            }
        })
    }
    function handleClick(e){
        e.preventDefault()
    }
    function handleSubmit(){

    }
    return(
        <div className="feedback--div">
            <h1 className="feedback--title">Feedback</h1>
            <form className="feedback--form" onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={feedback.name} 
                onChange={handleChange} 
                name="name" 
                placeholder="Enter your name" />
                <input 
                type="email" 
                value={feedback.email} 
                onChange={handleChange}  
                name="email" 
                placeholder="Enter your e-mail" />
                <textarea 
                className="feedback--textarea" 
                onChange={handleChange} 
                name="textarea" 
                value={feedback.textarea} 
                placeholder="Enter Your Feedback here.">

                </textarea>
                <button onClick={handleClick} className="feedback--btn">Send</button>
            </form>
        </div>
    )
}