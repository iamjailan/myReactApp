import React from "react";
export default function FormFill(){
    const [formData, setFormData] = React.useState({
        name: "",
        address: "",
        card: ""
    })
    const [formShow, setFormShow] = React.useState(true)
    function formHandle(e){
        setFormData(prevData => {
            const {name, value} = e.target
            return{
                ...prevData,
                [name] : value
            }
        })
    }
    function submitHandle(e){
        e.preventDefault()
    }
    function toggleForm(){
        setFormShow(prevShow => !prevShow)
    }
    return(
        <div className={formShow ? "form--class" : "hide--form"}>
        <h1>Information Card</h1>
            <form onSubmit={submitHandle}>
            <input type="text" name="name" value={formData.name} onChange={formHandle} placeholder="Ahmad..."/>
            <input type="text" name="address" value={formData.address} onChange={formHandle} placeholder="Address..."/>
            <input type="number" name="card" value={formData.card} onChange={formHandle} placeholder="XXXX-XXXX-XXXX-XXXX"/>
            <button>Buy</button>
            </form>
            <button onClick={toggleForm} className="close--btn">Close</button>
        </div>
    )
}