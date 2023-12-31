
import Axios from 'axios';
const api = "https://liongate-backend.vercel.app"
const headers = { 'Authorization': 'Bearer liongate'}; // 

export const register = async (data)=>{
    try{
        const res = await Axios.post(api+"/User/Register",data,{headers});
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
export const login = async(data)=>{ 
    try{
        const res = await Axios.post(api+"/User/login",data,{headers});
        console.log(res.data);
        if(res.data.token){
            localStorage.setItem("User", res.data.token);
            return res.data;
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
export const getSeat=async(round_id)=>{
    try{
        const res = await Axios.post(api+"/Show/getSeat",{round_id:round_id},{headers});
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong!"
    }
}
export const getBooking = async(user_id)=>{
    try{
        const res = await Axios.post(api+"/Show/getBooking",{user_id:user_id},{headers});
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong!"
    }
}
export const updateSeat = async(data)=>{
    try{
        const res = await Axios.put(api+"/Show/updateSeat",{data:data},{headers});
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong"
    }
}
export const booking = async(data)=>{
    try{
        
        const res = await Axios.post(api+"/Show/booking",{data:data},{headers});
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong"
    }
}
export const getRoundedit = async()=>{
    try{
        const res = await Axios.get(api+"/Show/getRoundedit",{headers});
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong"
    }
}
export const getRoom = async()=>{
    try{
        const res = await Axios.get(api+"/Show/getRoom",{headers});
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong"
    }
}
export const editRound = async(data)=>{
    try{
        const res = await Axios.put(api+"/Show/editRound",{data:data},{headers});
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong"
    }
}
export const editAnimal = async(data)=>{
    try{
        const res = await Axios.put(api+"/Animal/editAnimal",{data:data},{headers});
        if(res.data.status=="ok"){
            return res.data.message;
        }
        return res.data.status;
    }catch(err){
        return "something wrong"
    }
}