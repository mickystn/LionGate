const db = require('../config/db')
const secret_token = require('../config/token')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

exports.register =(req,res)=>{
    try{
        let username = req.body.username;
        let password = req.body.password;

        let sqlInsert = "INSERT INTO `users`( `users_name`, `users_password`, `role`) VALUES (?,?,?)";

        let sqlSearch = "SELECT * FROM users WHERE users_name = ? "

        db.query(sqlSearch,[username],(err,result)=>{
            if(result.length!=0) return res.json({status:'error',message:'cannot use this username'})
            if(err) return res.json({status:'error',message:err})

            bcrypt.hash(password, saltRounds, function(err, hash) {
                db.query(sqlInsert,[username,hash,0],(err,result)=>{
                    if(err) return res.json({status:'error',message:err})
                    res.json({status:'ok',message:'create complete'})
                })
            });
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}
exports.getAlluser = (req,res)=>{
    try{
        let sql = "SELECT * FROM `users`";
        db.query(sql,(err,result)=>{
            if(err) return res.json({status:'error',message:err})
            res.json({status:'ok',message:result});
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
    
}
exports.login=(req,res)=>{
    try{
        var username = req.body.username;
        var password = req.body.password;

        let sql = "SELECT * FROM `users` WHERE `users_name`=?"
        console.log("test");
        db.query(sql,[username],(err,result)=>{
            if(err){
                res.json({status: 'error', message: err})
                return;
            }
            if(result.length==0) {
                res.json({status:'error',message:'no user found'})
                return
            }
            console.log(result[0].users_password.length);
            bcrypt.compare(password, result[0].users_password).then(function(isLogin) {
                if(isLogin){
                    var token = jwt.sign({id:result[0].users_id,username:result[0].users_name},secret_token,{expiresIn:'1h'})
                    res.json({status:'ok',message:'login success',token})
                }else{
                    res.json({status:'err',message:'login failed'})
                }
            });
        })
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}
exports.auth=(req,res)=>{
    try{
        const token = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(token,secret_token)
        res.json({status:'ok',decoded})
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}