/* eslint-disable react/prop-types */

import '../style/Card.css'
import { useNavigate } from "react-router-dom";

export default function Card(props){
    const navigate = useNavigate();
    return (
        <div className="Card" onClick={()=>{navigate(props.locate)}}>
            {props.icon}
            {props.name}
        </div>
    )

}