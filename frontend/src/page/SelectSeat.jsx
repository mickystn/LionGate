import { useLocation } from "react-router-dom"
import Seat from '../component/Seat'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function SelectSeat(){
    const {state}=useLocation();
    const navigate = useNavigate();
    console.log(state);
    useEffect(()=>{
        if(state==null){
            return navigate("/SelectAnimal")
        }
    },[])
    return (
        <Seat/>
    )
}