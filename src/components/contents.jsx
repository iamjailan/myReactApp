import React from "react";

export default function Contents(){
    return(
        <div className="content">
            <div className="content--card">
            <h1 className="content--title">Attal Computers</h1>
            <p className="content--text">At Attal Store, we offer a wide range of PCs to suit your specific needs. Whether you're a gamer, a student, or a professional, we have the perfect computer for you. From powerful desktops to sleek laptops, we have it all. </p>
            {/* <div className="content--mini"> */}
                <p className="content--phone"><img className="svg--file" src="./images/phone.svg" />: 0780-575-336</p>
                <p className="content--add"><img className="svg--file" src="./images/location.svg" /> : Kabul, Afghanistan - Shahr-e-Naw</p>
            {/* </div> */}
            </div>
            <div className="content--image">
            <img src="./images/2.jpg" />
            </div>
        </div>
    )
}