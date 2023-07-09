import '../style/Navbar.css'
import { useNavigate } from "react-router-dom";


export default function Navbar(){
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
                <li><a href='/'>Home</a></li>
                <li><a href="/Animal">Animal</a></li>
                <li><a href='https://mickie-portfolio.vercel.app/'>Contact</a></li>
                <li><button className="button" onClick={()=>{navigate('/Login')}}>Buy Ticket</button></li>
            </ul>
        </section>
    )
}