
import Navbaradmin from "../component/Navbaradmin"
import { useEffect,useState,forwardRef } from "react"
import { auth ,getAnimal,editAnimal} from "../service/api"
import { useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Modal } from 'antd';
import '../style/Editanimal.css'
import { Form,Button,Input } from 'antd';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
});


export default function EditAnimal(){
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [animal,setAnimal] = useState();

    const [msg,setMsg]=useState("");
    const [msg2,setMsg2]=useState("");
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const [dataselect,setDataselect] = useState();

    useEffect(()=>{
        if(localStorage.getItem("User")){
            auth().then((res)=>{
                if(res=="err" || res=="something wrong") return navigate("/Login")
                if(res.role==0){
                    return navigate("/SelectAnimal")
                }
            })
            getAnimal().then((res)=>{
                if(res=="err" || res=="something wrong") return
                setAnimal(res) ;
            })
        }else{
            return navigate("/Login")
        }
    },[])
    function onClick(val){
        setDataselect(val)
        setIsModalOpen(true)
    }
    const onFinish = (values) => {
        const data = {
            Animal_ID:dataselect.Animal_ID,
            Animal_Name:values.Name,
            Animal_Type:values.Type,
            Animal_Species:values.Species
        }
        console.log(data);
        editAnimal(data).then((res)=>{
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
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        } 
        setIsModalOpen(false);
    };
    return (
       <div className="Editanimal_container">
            <Navbaradmin/>
            <div className="Editanimal_content">
                {
                    animal?.map((val,index)=>{
                        return (
                            <Accordion key={index} style={{margin:0}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <div className="acc-detail">
                                        <h1 className="txt1-acc" >{val.Animal_Name}</h1>
                                        <div style={{display:'flex' ,gap:"10px"}}>
                                            <h1 className="txt2-acc">{val.Animal_Type}</h1>
                                            <h1 className="txt2-acc">{val.Animal_Species}</h1>
                                        </div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex'}}>
                                    <button className="btn-time" onClick={()=>{onClick(val)}}>Edit</button>
                                </AccordionDetails>
                            </Accordion>
                        )
                    }) 
                }
                <Modal title="Edit" open={isModalOpen} footer={null}>
                    <Form onFinish={onFinish}>
                        <Form.Item name="Name" rules={[{required: true}]}>
                            <Input placeholder="Name"/>
                        </Form.Item>
                        <Form.Item name="Type" rules={[{required: true}]}>
                            <Input placeholder="Type"/>
                        </Form.Item>
                        <Form.Item name="Species" rules={[{required: true}]}>
                            <Input placeholder="Species"/>
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