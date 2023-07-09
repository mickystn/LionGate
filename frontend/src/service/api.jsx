
import Axios from 'axios';
const api = "http://localhost:3001"
const headers = { 'Authorization': 'Bearer liongate'}; // 
export const login = async(data)=>{
    try{
        const res = await Axios.post(api+"/User/login",data,{headers});
        if(res.data.token){
            localStorage.setItem("User", res.data.token);
            return res.data.message;
        }
        else{
            localStorage.clear()
            return res.data.message;
        }
    }catch(err){
        return "something wrong!"
    }
}
export const auth = async()=>{
    try{
        const headers = { 'Authorization': 'Bearer '+ localStorage.getItem("User")}; // 
        const res = await Axios.post(api+"/User/auth",{},{headers});
        if(res.data.status=="ok"){
            return res.data.decoded;
        }
        localStorage.clear()
        return res.data.status;
    }catch(err){
        return "something wrong!"
    }
}