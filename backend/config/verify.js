
const verify = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'ไม่พบ Token' });
        }
        if(token=="liongate"){
            next();
        }else{
            return res.status(401).json({ message: 'wrong token'})
        }
            
    }catch(err){
        res.json({status:'err',msg:err.message})
    }
}


module.exports = verify;