
import { MailOutlined ,LockOutlined,UserOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useState,Fragment ,forwardRef, useEffect} from 'react';
import { Form, Input } from 'antd';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Navbar from '../component/Navbar';

import img from '../assets/login.png'
import '../style/Register.css'

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
const ruleEmail = [
    {
        required: true,
        message: 'Please input your email!',
    },
    {
        type: 'email',
        message: 'Please check your email'
    }
]
export default function Register(){
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const [msg,setMsg]=useState("test");

    function onFinish(values){
        const data = {email: values.Email, password: values.Password,name:values.Name}
        console.log(data);
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
                    <Form.Item name="Email" rules={ruleEmail}>
                        <Input size="default " placeholder="Email"  bordered={false} prefix={<MailOutlined />} className='inp'/>
                    </Form.Item>
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