
import Navbar from "../component/Navbar"
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
                    return navigate("/SelectAnimal")
                }
            })
            getAnimal().then((res)=>{
                setAnimal(res)
                setAnimalsearch(res)
            })
            getRound().then((res)=>{
                setRound(res)
                console.log(res);
            })
            return
        }
        return navigate("/Login")
    },[])
    function onChange(evt){
        let word = evt.target.value;
        setAnimalsearch(animal.filter((animal) => animal.animal_name.startsWith(word)));
    }

    function onClickHandle(data){
        navigate("/SelectSeat",{state:data})
    }

    return (
        <div className="SA_container">
            <Navbar/>
            <div className="SA_content">
                <h1 className="txt-title">Animal</h1>
                <div className="SA_subcontent">
                    <Input  placeholder="Search"prefix={<SearchOutlined />} onChange={onChange} />
                    {animalsearch?.map((val1,index)=>{
                        return (
                            <Accordion key={index} style={{margin:0}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <img src={val1.animal_path} className="img-acc"></img>
                                    <div className="acc-detail">
                                        <h1 className="txt1-acc" >{val1.animal_name}</h1>
                                        <div style={{display:'flex' ,gap:"10px"}}>
                                            <h1 className="txt2-acc">{val1.animal_type}</h1>
                                            <h1 className="txt2-acc">{val1.animal_species}</h1>
                                        </div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex'}}>
                                    {round?.map((val2,index)=>{
                                        if(val1.animal_name==val2.animal_name){
                                            return (
                                                <button className="btn-time" key={index} onClick={()=>{onClickHandle(val2)}}>
                                                    {val2.start_time.slice(0,5)}
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