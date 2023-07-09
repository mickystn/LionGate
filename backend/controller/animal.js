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