import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import '../style/Seat.css'
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import { getSeat } from '../service/api';

// eslint-disable-next-line react/prop-types
function Seat({onRevdata}) {
    const {state}=useLocation();
    const [seats, setSeats] = useState([]);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        if(state==null){
            return navigate("/SelectAnimal")
        }
        setLoading(true)
        getSeat(state.Round_ID).then((res)=>{
            const changeBool = res.map(obj=>({...obj,isReserved:obj.isReserved===1,isSelected:false,price:state.price}));
            setSeats(changeBool) 
        }).finally(()=>{
            setLoading(false)
        })
    },[])
    const handleSeatClick = (seatId) => {
        const updatedSeats = seats.map((seat) => {
        if (seat.Seat_ID === seatId) {
            if(seat.isReserved==0){
                return { ...seat, isSelected: !seat.isSelected };
            }
        }
        return seat;
        });
        onRevdata(updatedSeats)
        setSeats(updatedSeats);
    };

  return (
    <div>
        {loading?
            <div className="center">
                <ReactLoading type="spin" color="black" height={150} width={150}  />
            </div>
            :
            <div className="seat-container">
                <div className="seat-content">
                    {seats?.map((seat) => ( seat.isReserved==0?
                        <button key={seat.Seat_ID} className="btn-seat"
                            onClick={() => handleSeatClick(seat.Seat_ID)}
                            style={{ 
                                    backgroundColor: seat.isSelected ? 'red' : 'green' ,
                                    color: seat.isSelected ? 'white' : 'black',
                                }}>
                                {seat.Seat_Name}
                        </button>
                        :
                        <button key={seat.Seat_ID} className="btn-seat" style={{backgroundColor:'gray',color:'black'}}>{seat.Seat_Name}</button> 
                    ))}
                </div>
            </div>
        }
    </div>
  );
}

export default Seat;