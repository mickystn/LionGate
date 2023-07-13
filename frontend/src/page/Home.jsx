
import Navbar from '../component/Navbar'
import Card from '../component/Card'

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PetsIcon from '@mui/icons-material/Pets';
import '../style/Home.css'

import img from '../assets/img.jpg'

export default function Home(){
    return (
        <div>
            <div className="Home-container">
                <Navbar/>
                <div className="Home-content">
                    <img src={img} className="img"></img>
                    <div className="r-content">
                        <div className="text-content">
                            <h1 className="text-size2">Experience the Thrills of</h1>
                            <h1 className="text-size1">Lion Gate</h1>
                            <h1  className="text-size3">Secure Your Wildlife Adventure Today!</h1>
                        </div>
                        <div className="btn-content">
                            <button className="button">Book now</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className="Card-container">
                <div className='Card-content'>
                    <Card icon={<PetsIcon  fontSize='large' />} name="Animal"/>
                    <Card icon={<AccessTimeIcon fontSize='large'/>}   name="Hours"/>
                    <Card icon={<ConfirmationNumberIcon fontSize='large'/>}  name="Ticket&Prices"/>
                </div>
            </div>
        </div>
        
    )
}