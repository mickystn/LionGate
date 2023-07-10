
import Navbar from '../component/Navbar'
import '../style/Login.css'

import img from '../assets/login.png'

import { MailOutlined ,LockOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useState,forwardRef,useEffect} from 'react';
import { Form, Input } from 'antd';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import {login,auth} from '../service/api'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
  });
  const rulePassword= [
      {
          required: true,
          message: 'Please input your password!',
      },
  ]
  const ruleEmail = [
      {
          required: true,
          message: 'Please input your email!',
      }
  ]

export default function Login(){
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("User")){
            auth().then((res)=>{
                console.log(res);
                if(res!='err'){
                    navigate("/SelectAnimal")
                }
            })
        }
        
    })


    function onFinish(values){
        const data = {username: values.Username, password: values.Password}
        console.log(data);
        login(data).then((res)=>{
            if(res=="login success"){
                navigate('/SelectAnimal')
            }
        })
    }
    const onFinishFailed = () => {
        setOpen(true)
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        } 
        setOpen(false);
    }
    return (
        <div className="Login-container">
            <Navbar/>
            <div className="Login-content">
                <img src={img} className="imgLogin"/>
                <h1 className="Login-title">Sign In</h1>
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                    <div className="input-group">
                        <Form.Item name="Username" rules={ruleEmail}>
                            <Input size="default " placeholder="Username"  bordered={false} prefix={<MailOutlined />} className='inp'/>
                        </Form.Item>
                        <Form.Item name="Password" rules={rulePassword}>
                            <Input.Password size="default " placeholder="Password" bordered={false} prefix={<LockOutlined />} className='inp'/>
                        </Form.Item>
                        <a className="des" onClick={()=>{navigate("/Register")}} >Create an account</a>
                    </div>
                    <div className='input-btn'>
                        <Snackbar open={open} anchorOrigin={{horizontal: 'center',vertical: 'top'}} autoHideDuration={3000} onClose={handleClose}>
                            <Alert onClose={handleClose}  severity="error" sx={{ width: '100%' ,color:'#FFF' }}>
                                Check your email and password
                            </Alert>
                        </Snackbar>
                        <button className="btn-login" >Login in</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}