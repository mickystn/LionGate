import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import '../style/Seat.css'
import { useNavigate } from "react-router-dom";

import { getSeat } from '../service/api';

function Seat() {
    const {state}=useLocation();
    const [seats, setSeats] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        if(state==null){
            return navigate("/SelectAnimal")
        }
        console.log(state.room_id);
        getSeat(state.room_id).then((res)=>{
            console.log(res);
            setSeats(res) 
        })
        // console.log(state);
        // const seatCount =[]
        // for(let i=1;i<=state.capacity;i++){
        //     seatCount.push({id:i, isReserved:false, isSelected:false})
        // }
        // setSeats(seatCount)
    },[])
    useEffect(()=>{
    })
    const handleSeatClick = (seatId) => {
        const updatedSeats = seats.map((seat) => {
        if (seat.id === seatId) {
            return { ...seat, isSelected: !seat.isSelected };
        }
        return seat;
        });
        setSeats(updatedSeats);
    };

  return (
    <div>
      <div className="seat-container">
        <div className="seat-content">
            {seats?.map((seat) => (
            <button  key={seat.seat_id} className={seat.isSelected ? 'reserved' : 'available'} 
                onClick={() => handleSeatClick(seat.id)}
                style={{ 
                        backgroundColor: seat.isSelected ? 'red' : 'green',
                        color: seat.isSelected ? 'white' : 'black',
                    }}
                >
                    {seat.seat_name}
            </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Seat;