import React from "react";

export default function Profile(props){
    return(
        <div className="profile">
            <img src={props.image}/>
            <h3>{props.studentId}</h3>
            <h3>{props.name}</h3>
        </div>
    )
}