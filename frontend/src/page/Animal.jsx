import Navbar from "../component/Navbar"
import CardAnimal from '../component/CardAnimal'

import tigerImg from '../assets/tiger.jpg'
import DolhImg from '../assets/dohlphin.jpg'
import MonImg from '../assets/monkey.jpg'

import '../style/Animal.css'

const data = [
    {
        img: <img src={tigerImg} className="Animal-card-img"/>,
        name:"Tiger",
        spechies:"Big cat",
        Type: "Carnivore"
    },
    {
        img: <img src={DolhImg} className="Animal-card-img"/>,
        name:"Dolphin",
        spechies:"Odontoceti",
        Type: "Carnivore"
    },
    {
        img: <img src={MonImg} className="Animal-card-img"/>,
        name:"Monkey",
        spechies:"Chimpanzee",
        Type: "Herbivore"
    }
]   

export default function Animal(){
    return (
        <div>
            <Navbar/>
            <div className="Animal-container">
                <div className="Animal-content">
                    <h1>Animal</h1>
                    <div className="Animal-card">
                        {data.map((val,index)=>{
                            return <CardAnimal key={index} data={val}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}