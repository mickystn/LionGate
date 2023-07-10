
import Navbar from "../component/Navbar"
import {useEffect, useState} from 'react'
import '../style/SelectAnimal.css'
import Seat from '../component/Seat'
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import {getAnimal} from '../service/api'

export default function SelectAnimal(){

    const [animal,setAnimal]=useState()
    const [animalsearch,setAnimalsearch]=useState();
    useEffect(()=>{
        getAnimal().then((res)=>{
            console.log(res);
            setAnimal(res)
            setAnimalsearch(res)
        })
    },[])


    function onChange(evt){
        console.log(evt.target.value);
        let word = evt.target.value;
        setAnimalsearch(animal.filter((animal) => animal.animal_name.startsWith(word)));
    }
    return (
        <div className="SA_container">
            <Navbar/>
            <div className="SA_content">
                <h1 className="txt-title">Animal</h1>
                <div className="SA_subcontent">
                    <Input  placeholder="Search"prefix={<SearchOutlined />} onChange={onChange} />
                    {animalsearch?.map((val,index)=>{
                        return (
                            <Accordion key={index} style={{margin:0}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <img src={val.animal_path} className="img-acc"></img>
                                    <div className="acc-detail">
                                        <h1 className="txt1-acc" >{val.animal_name}</h1>
                                        <div style={{display:'flex' ,gap:"10px"}}>
                                            <h1 className="txt2-acc">{val.animal_type}</h1>
                                            <h1 className="txt2-acc">{val.animal_species}</h1>
                                        </div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <button>10:00</button>
                                    <button>11:00</button>
                                    <button>12:00</button>
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