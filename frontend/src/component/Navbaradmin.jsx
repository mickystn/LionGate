
import '../style/Navbar.css'
import { useNavigate } from "react-router-dom";

export default function Navbaradmin(){
    const navigate = useNavigate(); 
    return (
        <section className="top-nav">
            <div>
            <a>Lion Gate</a>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><a href='/EditRound'>Round</a></li>
                <li><a href='/EditAnimal'>Animal</a></li>
                <li><button className="button" onClick={()=>{
                    navigate('/Login')
                    localStorage.clear('User')
                }}>Log out
                </button></li>
            </ul>
        </section>
    )
}