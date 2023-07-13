
import { useEffect,useState,forwardRef } from "react"
import { auth ,getRoundedit,getRoom,editRound} from "../service/api"
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../component/Navbaradmin";
import { TimePicker, Form,Button, Select } from 'antd';
import '../style/Editround.css'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {Table } from 'antd';
import {Modal } from 'antd';
const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
});

export default function Editround(){
    const navigate = useNavigate();
    const { Option } = Select;
    const [msg,setMsg]=useState("test");
    const [msg2,setMsg2]=useState("test");
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [round,setRound] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [room,setRoom] = useState();
    const [data,setData] = useState();

    const columns = [
        {
        title: 'Round ID',
        dataIndex: 'Round_ID',
        key: 'Round_ID',
        },
        {
            title: 'Room Name',
            dataIndex: 'Room_Name',
            key: 'Room_Name',
        },
        {
        title: 'Animal Name',
        dataIndex: 'Animal_Name',
        key: 'Animal_Name',
        },
        {
        title: 'Show Time',
        dataIndex: 'Showtime',
        key: 'Showtime',
        },
        {
        title: 'Action',
        key: 'action',
        render: (txt,rec) => (
            <a onClick={()=>{showModal(rec)}}>Edit</a>
        ),
        },
    ];
    const showModal = (rec) => {
        setData(rec)
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        } 
        setOpen(false);
    };
    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };
    const onFinish = (values) => {
        let newTime = formatTime(values.select_time.$d);
        let newRoomID = values.room_id;

        const tempData = {
            Round_ID:data.Round_ID,
            Showtime:newTime,
            Room_ID:newRoomID
        }
        editRound(tempData).then((res)=>{
            if(res!="err" && res!="something wrong"){
                setMsg("Edit Complete")
                setOpen(true)
                setTimeout(()=>{
                    window.location.reload()
                },2000)
                
            }else{
                setMsg2("Please try again")
                setOpen2(true)
                setTimeout(()=>{
                    window.location.reload()
                },2000)
            }
        })
        
    };
    useEffect(()=>{
        if(localStorage.getItem("User")){
            auth().then((res)=>{
                if(res=='err') navigate("/Login")
                if(res.role==0){
                    return navigate("/SelectAnimal")
                }
            })
            getRoundedit().then((res)=>{
                if(res=="err" || res=="something wrong") return
                setRound(res)
            })
            getRoom().then((res)=>{
                if(res=="err" || res=="something wrong") return
                setRoom(res)
            })
        }else{
            return navigate("/Login")
        }
    },[])
    return (
        <div className="Editround_container">
            <Navbaradmin/>
            <div className="Editround_content">
                <Table columns={columns} dataSource={round} style={{width:'100%'}} />;
                <Modal title="Edit" open={isModalOpen} footer={null}>
                    <Form onFinish={onFinish}>
                        <Form.Item name="select_time" rules={[{required: true}]}>
                            <TimePicker format="HH:mm" style={{width:'100%'}}/>
                        </Form.Item>
                        <Form.Item name="room_id" rules={[{required: true}]}>
                            <Select placeholder="Select room">
                                {room?.map((val,index)=>{
                                    return (
                                        <Option key={index} value={val.Room_ID}>{val.Room_Name}</Option>
                                    )
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="default" htmlType="submit">
                                Submit
                            </Button>
                            <Button type="default" onClick={handleCancel} style={{marginLeft:'10px'}}>
                                Cancel
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
                <Snackbar open={open} anchorOrigin={{horizontal: 'center',vertical: 'top'}} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose}  severity="success" sx={{ width: '100%' ,color:'#FFF' }}>
                        {msg}
                    </Alert>
                </Snackbar>
                <Snackbar open={open2} anchorOrigin={{horizontal: 'center',vertical: 'top'}} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose}  severity="error" sx={{ width: '100%' ,color:'#FFF' }}>
                        {msg2}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}