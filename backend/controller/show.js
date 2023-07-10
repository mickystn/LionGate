const db = require('../config/db')

exports.getRound = (req,res)=>{
    try{
        let sql=`SELECT animal.animal_name,rounds.start_time,rooms.room_id,rooms.capacity,rounds.round_id FROM rounds INNER JOIN rooms ON 
                rounds.room_id = rooms.room_id INNER JOIN animal ON rounds.animal_id = animal.animal_id;`
        
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
        let room_id = req.body.room_id;
        console.log(room_id);
        let sql="SELECT * FROM `seats` WHERE room_id=? ORDER BY seat_name ASC;"
        db.query(sql,[room_id],(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}