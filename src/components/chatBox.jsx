import React from "react";
// const chatMessage = document.querySelector(".chat--message");

export default function ChatBox(props){
    const [message, setMessage] = React.useState({
        sendMessage: "",
    })
    const [received, setReceived] = React.useState("");
    function handleChange(e){
        setMessage(prevMessage =>{
            const {name, value} = e.target
            return{
                prevMessage,
                [name]  : value
            }
        })
    }
    function sendMessage(e){
        setReceived(message.sendMessage)
        message.sendMessage = ""
    }
    return(
        <div className="chat--div">
            <h1 className="chat--title">Online ChatBox</h1>
            <div className="chat--child">
                <div className="chat--message--div">
                {received ? <img className="chat--message--profile" src="./images/profile.svg" /> : ""}
                    <h4 className="chat--message">{received}</h4>
                </div>
                <div className="chat--input--div">
                    <input type="text" name="sendMessage" onChange={handleChange} value={message.sendMessage} className="chat--input" placeholder="have any question?"/>
                    {message.sendMessage ? <button className="chat--btn" onClick={()=> sendMessage()}>Send</button> : <button className="chat--btn--false"></button>}
                </div>
            </div>
        </div>
    )
    
}