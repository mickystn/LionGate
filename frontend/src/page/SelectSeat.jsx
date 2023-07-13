import { useLocation } from "react-router-dom"
import Navbaruser from '../component/Navbaruser'
import Seat from '../component/Seat'
import { useEffect,useState,forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import {updateSeat,auth,booking} from '../service/api'
import '../style/SelectSeat.css'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
});


export default function SelectSeat(){
    const {state}=useLocation();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [msg,setMsg] = useState('');
    const [msg2,] = useState('Please select seat');
    const [seatselect,setSelect] = useState('');
    const [seatid,setSeatid] = useState('');
    const [price,setPrice]=useState('');
    const [pps,setPps] = useState('');

    const [userid,setUID]=useState('');

    useEffect(()=>{
        if(localStorage.getItem("User")){
            auth().then((res)=>{
                if(res=="err" || res=="something wrong") return navigate("/Login")
                if(res.role==1){
                    return navigate("/Editround")
                }
                setUID(res.id)
            })
            if(state==null){
                return navigate("/SelectAnimal")
            }
            setPps(state.price)
        }else{
            return navigate("/Login")
        }
    },[])
    const onRevdata=(data)=>{
        const tempString =[]
        const tempId=[]
        let tempSum=0;
        
        data.map(obj => {
            if(obj.isSelected){
                tempString.push(obj.Seat_Name)
                tempId.push(obj.Seat_ID)
                tempSum+=obj.price
            }
        });
        
        setPrice(tempSum)
        setSeatid(tempId)
        setSelect(tempString.join(', '))
    } 
    function onClick(){
        if(seatselect){
            updateSeat(seatid).then((resUpdate)=>{
                if(resUpdate=="err") return

                const bookingData = {
                    seatselect:seatselect,
                    price:price,
                    user_id:userid,
                    round_id:state.Round_ID
                }

                booking(bookingData).then((resBooking)=>{
                    if(resBooking=="err") return 
                    setMsg("Booking complete")
                    setOpen(true)
                    setTimeout(()=>{
                        navigate("/History")
                    },3000)
                })
                
            })
        }else{
            setOpen2(true);
        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        } 
        setOpen2(false)
        setOpen(false);
    };
    return (
        <div>
            <Navbaruser/>
            <div className="ss_container">
                <div className="seat_show"><Seat onRevdata={onRevdata}/></div>
                <div className="ss_content">
                    <div className="ss_pps">
                        <h1 className="ss_pps_txt">Price per seat : {pps}</h1>
                    </div>
                    <div className="ss_detail1">
                        <h1 className="ss_txt_detail1">Select seats</h1>
                        <h1 className="ss_txt_detail1">Total</h1>
                    </div>
                    <div className="ss_detail1">
                        <h1 className="ss_txt_detail1">{seatselect}</h1>
                        <h1 className="ss_txt_detail1">{price}</h1>
                    </div>
                    <button className="ss_btn" onClick={()=>{onClick()}}>Submit</button>
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
        </div>
        
    )
}