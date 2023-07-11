import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import '../style/Seat.css'
import { useNavigate } from "react-router-dom";

import { getSeat } from '../service/api';

// eslint-disable-next-line react/prop-types
function Seat({onRevdata}) {
    const {state}=useLocation();
    const [seats, setSeats] = useState([]);

    const navigate = useNavigate();
    useEffect(()=>{
        if(state==null){
            return navigate("/SelectAnimal")
        }
        console.log(state);
        getSeat(state.round_id).then((res)=>{
            const changeBool = res.map(obj=>({...obj,isReserved:obj.isReserved===1,isSelected:false,price:state.price}));
            setSeats(changeBool) 
        })
    },[])
    const handleSeatClick = (seatId) => {
        const updatedSeats = seats.map((seat) => {
        if (seat.seat_id === seatId) {
            if(seat.isReserved==0){
                return { ...seat, isSelected: !seat.isSelected };
            }
        }
        return seat;
        });
        console.log(updatedSeats);
        onRevdata(updatedSeats)
        setSeats(updatedSeats);
    };

  return (
    <div>
      <div className="seat-container">
        <div className="seat-content">
            {seats?.map((seat) => ( seat.isReserved==0?
                <button key={seat.seat_id} className="btn-seat"
                    onClick={() => handleSeatClick(seat.seat_id)}
                    style={{ 
                            backgroundColor: seat.isSelected ? 'red' : 'green' ,
                            color: seat.isSelected ? 'white' : 'black',
                        }}>
                        {seat.seat_name}
                </button>
                :
                <button key={seat.seat_id} className="btn-seat" style={{backgroundColor:'gray',color:'black'}}>{seat.seat_name}</button> 
            ))}
        </div>
      </div>
    </div>
  );
}

export default Seat;