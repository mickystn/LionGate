const db = require('../config/db')

exports.getRound = (req,res)=>{
    try{
        // let sql=`SELECT rooms.price,animal.animal_name,rounds.start_time,rooms.room_id,rooms.capacity,rounds.round_id FROM rounds INNER JOIN rooms ON 
        //         rounds.room_id = rooms.room_id INNER JOIN animal ON rounds.animal_id = animal.animal_id;`
        let sql="SELECT * FROM rounds INNER JOIN animal ON rounds.animal_id=animal.animal_id;"

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
exports.booking = (req,res)=>{
    try{
        let data = req.body.data;
        let sql = "INSERT INTO `booking`(`user_id`, `round_id`, `seat`, `total_price`) VALUES (?,?,?,?)"
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
        let sql = "SELECT * FROM `booking` WHERE `user_id` =?"
        db.query(sql,[user_id],(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}
