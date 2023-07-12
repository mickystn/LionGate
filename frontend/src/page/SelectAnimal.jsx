
import Navbaruser from "../component/Navbaruser"
import {useEffect, useState} from 'react'
import '../style/SelectAnimal.css'
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {getAnimal,getRound,auth} from '../service/api'

export default function SelectAnimal(){
    const navigate = useNavigate();
    const [animal,setAnimal]=useState()
    const [animalsearch,setAnimalsearch]=useState();

    const [round,setRound]=useState();

    useEffect(()=>{
        if(localStorage.getItem("User")){
            auth().then((res)=>{
                if(res!='err'){
                    if(res.role==1){
                        return navigate("/Editround")
                    }
                
                }
            })
            
            getAnimal().then((res)=>{
                setAnimal(res)
                setAnimalsearch(res)
            })
            getRound().then((res)=>{
                setRound(res)
            })
        }else{
            return navigate("/Login")
        }
    },[])
    function onChange(evt){
        let word = evt.target.value;
        setAnimalsearch(animal.filter((animal) => animal.animal_name.startsWith(word)));
    }

    function onClickHandle(data){
        console.log(data);
        navigate("/SelectSeat",{state:data})
    }

    return (
        <div className="SA_container">
            <Navbaruser/>
            <div className="SA_content">
                <h1 className="txt-title">Animal</h1>
                <div className="SA_subcontent">
                    <Input  placeholder="Search"prefix={<SearchOutlined />} onChange={onChange} />
                    {animalsearch?.map((val1,index)=>{
                        return (
                            <Accordion key={index} style={{margin:0}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <img src={val1.Animal_Path} className="img-acc"></img>
                                    <div className="acc-detail">
                                        <h1 className="txt1-acc" >{val1.Animal_Name}</h1>
                                        <div style={{display:'flex' ,gap:"10px"}}>
                                            <h1 className="txt2-acc">{val1.Animal_Type}</h1>
                                            <h1 className="txt2-acc">{val1.Animal_Species}</h1>
                                        </div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex'}}>
                                    {round?.map((val2,index)=>{
                                        if(val1.Animal_ID==val2.Animal_ID){
                                            return (
                                                <button className="btn-time" key={index} onClick={()=>{onClickHandle(val2)}}>
                                                    {val2.Showtime.slice(0,5)}
                                                </button>
                                            )
                                        }
                                    })}
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

// const [color, setColor] = useState('red');
//     const [toggle,setToggle] = useState(false);
//     const handleClick = () => {    
//         if(toggle) {
//             setColor('red');
//             setToggle(false)
//         }
//         else{
//             setColor('blue');
//             setToggle(true)
//         }
//     };
//     return (
//         <div>
//             <button style={{ backgroundColor: color }}  onClick={handleClick}/>
//         </div>
//     )