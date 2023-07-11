
import { useEffect,useState } from "react"
import { getBooking,auth } from "../service/api"
import { useNavigate } from "react-router-dom";
import { Table } from 'antd';
import Navbar from "../component/Navbar";

import '../style/History.css'


const columns = [
    {
      title: 'Round ID',
      dataIndex: 'round_id',
      key: 'round_id',
    },
    {
      title: 'Seat',
      dataIndex: 'seat',
      key: 'seat',
    },
    {
      title: 'Total Price',
      dataIndex: 'total_price',
      key: 'total_price',
    },
];

export default function History(){
    const navigate = useNavigate();
    const [data,setData]=useState();
    useEffect(()=>{

        if(localStorage.getItem("User")){
            auth().then((res)=>{
                if(res=='err'){
                    return navigate("/Login")
                }
                getBooking(res.id).then((resGetbooking)=>{
                    setData(resGetbooking)
                })
            })
            return
        }
        return navigate("/Login")
    },[])

    return (
        <div className="history_contianer">
            <Navbar/>
            <div className="history_content">
                <Table columns={columns} dataSource={data} className="table"/>  
            </div>
                      
        </div>
        
    )
}