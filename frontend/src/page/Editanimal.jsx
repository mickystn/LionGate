
import Navbaradmin from "../component/Navbaradmin"
import { useEffect } from "react"
import { auth } from "../service/api"
import { useNavigate } from "react-router-dom";
export default function EditAnimal(){
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("User")){
            auth().then((res)=>{
                if(res=='err') navigate("/Login")
                if(res.role==0){
                    return navigate("/SelectAnimal")
                }
            })
        }else{
            return navigate("/Login")
        }
    },[])
    return (
       <div className="Editanimal_container">
            <Navbaradmin/>
            <div className="Editanimal_content">

            </div>
       </div> 
    )
}