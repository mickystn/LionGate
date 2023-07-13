const db = require('../config/db')

exports.getAnimal=(req, res) =>{
    try{
        let sql = "SELECT * FROM `animal`";
        db.query(sql,(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}
exports.editAnimal=(req, res) =>{
    try{
        let data = req.body.data;
        let sql="UPDATE `animal` SET `Animal_Name`=?,`Animal_Type`=?,`Animal_Species`=? WHERE Animal_ID=?"
        db.query(sql,[data.Animal_Name,data.Animal_Type,data.Animal_Species,data.Animal_ID],(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}