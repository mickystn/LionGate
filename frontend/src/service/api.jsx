
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
        const tokenData = localStorage.getItem("User")
        const res = await Axios.post(api+"/User/auth",{tokenData:tokenData},{headers});
        console.log(res);
        if(res.data.status=="ok"){
            return res.data.decoded;
        }
        localStorage.clear()
        return res.data.status;
    }catch(err){
        return "something wrong!"
    }
}
export const getAnimal = async()=>{
    try{
        const res = await Axios.get(api+"/Animal",{headers});
        console.log(res.data);
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong!"
    }
}
export const getRound = async()=>{
    try{
        const res = await Axios.get(api+"/Show/getRound",{headers});
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong!"
    }
}
export const getSeat=async(room_id)=>{
    try{
        const res = await Axios.post(api+"/Show/getSeat",{room_id:room_id},{headers});
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong!"
    }
}
export const getBooking = async()=>{
    try{
        const res = await Axios.get(api+"/Show/getRound",{headers});
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong!"
    }
}