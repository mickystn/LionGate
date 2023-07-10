import React, { useEffect, useState } from 'react';

function Seat() {
  const [seats, setSeats] = useState([
    { id: 1, isReserved: false },
    { id: 2, isReserved: false },
    { id: 3, isReserved: false }
  ]);

  useEffect(()=>{
    console.log(seats);
  })
  const handleSeatClick = (seatId) => {
    const updatedSeats = seats.map((seat) => {
      if (seat.id === seatId) {
        return { ...seat, isReserved: !seat.isReserved };
      }
      return seat;
    });
    setSeats(updatedSeats);
  };

  return (
    <div>
      <h2>ระบบจองที่นั่ง</h2>
      <div className="seat-container">
        {seats.map((seat) => (
          <button  key={seat.id} className={seat.isReserved ? 'reserved' : 'available'} 
        onClick={() => handleSeatClick(seat.id)}
        style={{ 
                backgroundColor: seat.isReserved ? 'red' : 'green',
                color: seat.isReserved ? 'white' : 'black',
            }}
        >
            {seat.id}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Seat;