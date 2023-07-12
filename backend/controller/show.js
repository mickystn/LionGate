const db = require('../config/db')

exports.getRound = (req,res)=>{
    try{
        let sql='SELECT rounds.Round_ID,rounds.Showtime,rounds.Animal_ID,rooms.price FROM `rounds` INNER JOIN rooms ON rounds.Room_ID=rooms.Room_ID'
        db.query(sql,(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }

}
exports.getSeat=(req,res)=>{
    try{
        let round_id = req.body.round_id;
        let sql=`SELECT * FROM seats WHERE round_id=?`
        db.query(sql,[round_id],(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}
exports.updateSeat=(req,res)=>{
    try{
        let data = req.body.data;
        let sql=`UPDATE seats SET isReserved=1 WHERE seat_id IN (${data.join(',')})`
        db.query(sql,(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}
exports.createRound=(req,res)=>{
    // [animal_id,room_id,showtime]
    //let data = [3,3,'19:00:00'] 

    // let sql = "SELECT Capacity FROM rooms WHERE Room_ID=?"

    // let sqlInsertSeat = "INSERT INTO `seats`(`Room_ID`, `Round_ID`, `Seat_Name`, `Is_Reserved`) VALUES (?,?,?,?)"

    // let sqlInsertRound = "INSERT INTO `rounds`(`Animal_ID`, `Room_ID`, `Showtime`) VALUES (?,?,?)"

    // let room_id = data[1]
    // let round_id=0;

    // db.query(sqlInsertRound,[data[0],data[1],data[2]],(err,result)=>{
    //     if(err) return res.json({status:'error',message:err})
    //     round_id = result.insertId
    //     db.query(sql,room_id,(err,result)=>{
    //         if(err) return res.json({status:'error',message:err})

    //         let cap = result[0].Capacity;
    //         for(let i=1;i<=cap;i++){
    //             db.query(sqlInsertSeat,[room_id,round_id,i,0],(err,result)=>{
    //                 if(err) return res.json({status:'error',message:err})
    //             })
    //         }    
    //     })
    // })
    // res.json({status:'ok',message:"Insert Round Complete"})
}
exports.booking = (req,res)=>{
    try{
        let data = req.body.data;
        
        let sql = "INSERT INTO `bookings`(`User_ID`, `Round_ID`, `Seat_select`, `Total_price`) VALUES (?,?,?,?)"
        db.query(sql,[data.user_id,data.round_id,data.seatselect,data.price],(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}
exports.getBooking = (req,res)=>{
    try{
        let user_id = req.body.user_id;
        let sql = "SELECT * FROM `bookings` WHERE `User_ID` =?"
        db.query(sql,[user_id],(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}
exports.round = (req,res)=>{
    let sql="SELECT * FROM `seats` WHERE seats.room_id=1"
    db.query(sql,(err,result)=>{
        console.log(result.length);
        res.json(result);
    })
}
exports.getRoundedit = (req,res)=>{
    try{
        let sql="SELECT * FROM `rounds` INNER JOIN animal on rounds.Animal_ID=animal.Animal_ID INNER JOIN rooms ON rounds.Room_ID=rooms.Room_ID"
        db.query(sql,(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}
exports.getRoom = (req,res)=>{
    try{
        let sql="SELECT * FROM `rooms`"
        db.query(sql,(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}
exports.editRound=(req,res)=>{
    try{
        let data = req.body.data;
        let sql="UPDATE `rounds` SET `Room_ID`=?,`Showtime`=? WHERE Round_ID=?"
        db.query(sql,[data.Room_ID,data.Showtime,data.Round_ID],(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}