
import { useEffect,useState } from "react"
import { getBooking,auth } from "../service/api"
import { useNavigate } from "react-router-dom";
import { Table } from 'antd';
import Navbaruser from "../component/Navbaruser";
import '../style/History.css'
import ReactLoading from 'react-loading';
const columns = [
    {
      title: 'Round ID',
      dataIndex: 'Round_ID',
      key: 'Round_ID',
    },
    {
      title: 'Seat',
      dataIndex: 'Seat_select',
      key: 'Seat_select',
    },
    {
      title: 'Total Price',
      dataIndex: 'Total_price',
      key: 'Total_price',
    },
];

export default function History(){
    const navigate = useNavigate();
    const [data,setData]=useState();
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem("User")){
            auth().then((res)=>{
                if(res=="err" || res=="something wrong") return navigate("/Login")
                if(res.role==1){
                    return navigate("/Editround")
                }
                setLoading(true)
                getBooking(res.id).then((resGetbooking)=>{
                    if(res=="err" || res=="something wrong") return 
                    setData(resGetbooking)
                }).finally(()=>{
                    setLoading(false)
                })
            })
            return
        }
        return navigate("/Login")
    },[])

    return (
        <div className="history_contianer">
            <Navbaruser/>
            {
                    loading?
                    <div className="center">
                        <ReactLoading type="spin" color="black" height={150} width={150}  />
                    </div>
                    :
                    <div className="history_content">
                            <div>
                                <Table columns={columns} dataSource={data} className="table"/>  
                            </div>
                    </div>
            }    
        </div>
        
    )
}