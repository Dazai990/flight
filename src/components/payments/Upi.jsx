import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { useSelectedFlight } from "../../context/FareContext";

const Upi = ()=>{
  const {selectedFlight} = useSelectedFlight();
  const Navigate = useNavigate();
  const [upiId,setUpiId]= useState("");
  const [isVerified, setIsVerified] = useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(isVerified) {
    alert('Payment Successful')
    Navigate('/')
    }
    else{
      alert('Please Verify Your UPI ID before proceeding')
    }
  };
  const handleVerify=()=>{
    if(upiId.length===16){
      alert('Verification Successful')
      setIsVerified(true)
    }
    else{
      alert("Enter valid UPI ID")
      setIsVerified(false)
    }
  };
  const handleUpiId=(e)=>{
    const input = e.target.value.replace(/[^0-9]/g, "");
    setUpiId(input.slice(0, 16));
    };

 return(
    <>
    <div className='head'>
    <h2 className="fst-italic"><PiContactlessPaymentFill/>&nbsp;UPI Payment</h2>
    </div>
    <div className="container fom rounded-1" style={{maxWidth:'800px',marginTop:'50px'}}>
      <form onSubmit={handleSubmit}>
        <div className="text-start">
         <label className="form-label mt-2" htmlFor="uid">
             UPI ID :
         </label>
         <input type="number" className="form-control" id="uid" placeholder="UPI ID" onInput={handleUpiId} value={upiId}required/>
        </div>
        <div className="mt-4">
         <button className="btn btn-success" type="button" disabled={upiId.length !== 16} onClick={handleVerify} required>Verify</button>
        </div>
        <div className="mt-4">
         <button className="btn btn-outline-primary" type="submit" disabled={!isVerified}>Pay &#8377;{selectedFlight ? selectedFlight.Fare :''}</button>
        </div>
      </form>
    </div>
    <div className='mt-5 d-flex justify-content-center '>
    <Link to="/payment" className="btn btn-danger mt-5 fst-italic">
    Back to Payment Methods
  </Link>
  </div>
</>
 );

};
export default Upi;