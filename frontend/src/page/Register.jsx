
import { LockOutlined,UserOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useState ,forwardRef, useEffect} from 'react';
import { Form, Input } from 'antd';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Navbar from '../component/Navbar';

import img from '../assets/login.png'
import '../style/Register.css'
import { auth,register } from '../service/api';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
});
const rulePassword= [
    {
        required: true,
        message: 'Please input your password!',
    },
]
const ruleName= [
    {
        required: true,
        message: 'Please input your name!',
    },
]
export default function Register(){
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const [msg,setMsg]=useState("test");

    useEffect(()=>{
        if(localStorage.getItem("User")){
            auth().then((res)=>{
                if(res=="err" || res=="something wrong") return navigate("/Login")
                if(res!='err'){
                    if(res.role==0){
                        return navigate("/SelectAnimal")
                    }
                    return navigate("/Editround")
                }
            })
        }
    })
    function onFinish(values){
        if(!values.Name || !values.Password){
            setMsg("โปรดใส่ข้อมูลให้ครบ")
            setOpen(true)
        }
        const data = {password: values.Password,username:values.Name}
        register(data).then((res)=>{
            console.log(res);
            if(res=="create complete"){
                navigate('/Login')
            }else if(res=="cannot use this username"){
                setMsg("ไม่สามารถใช้ Username นี้ได้")
                setOpen(true)
            }else{
                setMsg("โปรดลองอีกครั้งภายหลัง")
                setOpen(true)
            }
        })
    }
    const onFinishFailed = () => {
        setOpen(true)
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        } 
        setOpen(false);
    };
    return (
        <div className="Reg-container">
            <Navbar/>
            <div className="Reg-content">
                <img className="imgLogin"src={img}/>
                <h1 className="Reg-title">Register</h1>
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                <div className="input-group">
                    <Form.Item name="Name" rules={ruleName}>
                        <Input size="default " placeholder="Name"  bordered={false} prefix={<UserOutlined />} className='inp'/>
                    </Form.Item>
                    <Form.Item name="Password" rules={rulePassword}>
                        <Input.Password size="default " placeholder="Password" bordered={false} prefix={<LockOutlined />} className='inp'/>
                    </Form.Item>
                </div>
                <a className="des" onClick={()=>{navigate("/Login")}} >Already have an account?</a>
                <div className='input-btn'>
                    <Snackbar open={open} anchorOrigin={{horizontal: 'center',vertical: 'top'}} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose}  severity="error" sx={{ width: '100%' ,color:'#FFF' }}>
                            {msg}
                        </Alert>
                    </Snackbar>
                    <button className="btn-login" >Register</button>
                </div>
                </Form>

            </div>
        </div>
    )
}