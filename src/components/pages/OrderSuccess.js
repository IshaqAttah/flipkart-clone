import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ApiCallsContext } from "../context/ApiCallsContext"

 
export default function OrderSuccess (){
    const {payStackRef} = useContext(ApiCallsContext)
    const navigate = useNavigate()
    const href = window.location.href
    let tref =""
    if(href.includes("&")){
        tref=href.split("&")[1].split("=")[1]
    }else{
        tref = payStackRef
    }
     return(
        <div className="successPage">
            <div className="image">
                <img src="https://simplic8app.com/v2/app/images/success.png" alt="Success" />
            </div>
            <h2>Order completed successfully</h2>
            <p>Transaction ref : {tref}</p>
            <div className="buttons">
                <button onClick={(e)=>navigate("/furniture")}>Back to Shopping</button>
                <button>Track Orders</button>
            </div>

        </div>
    )
}