import { useState } from "react";
import { CiWallet } from "react-icons/ci";
import { Link,useNavigate } from "react-router-dom";
import { useSelectedFlight } from "../../context/FareContext";

const Wallets = ()=>{
  const {selectedFlight} = useSelectedFlight();
  const [mobileNumber,setMobileNumber]= useState("");
  const [verify,setVerify]= useState(false)
  const Navigate= useNavigate();

  const handleSubmit=(e)=>{
   e.preventDefault();
   if(verify){
   alert("Payment Successful") ;
   Navigate('/')
   }else{
    alert('Please Verify Mobile No before proceeding')
   }
  };
  const handleLink = () => {
    if (mobileNumber.length === 10) {
      alert("Mobile Number verification successful");
      setVerify(true)
    } else {
      alert("Please enter a valid 10-digit mobile number");
      setVerify(false)
    }
  };
  const handleMobileNumber=(e)=>{
  const input = e.target.value.replace(/[^0-9]/g, "");
  setMobileNumber(input.slice(0, 10));
  };

return(
  <>
    <div className='head'>
    <h2 className="fst-italic"><CiWallet className="fs-1"/>&nbsp;Wallets</h2>
    </div>
    <div className="container rounded fom" style={{maxWidth:'800px',marginTop:'60px'}}>
      <form onSubmit={handleSubmit}>
        <div className="form-check text-start pt-3">
           <input type="radio" className="form-check-input" name="Wallets" value='phonepe Wallet' id="wal1" required/>
           <label className="form-label fs-5" htmlFor="wal1">Phonepe Wallet</label> 
        </div>
        <div className="form-check text-start">
           <input type="radio" className="form-check-input" name="Wallets" value='Paytm Wallet' id="wal2" required/>
           <label className="form-label fs-5" htmlFor="wal2">Paytm Wallet</label> 
        </div>
        <div className="mt-3">
          <input className="form-control" type="tel" title="Enter Registered Mobile No" value={mobileNumber} onInput={handleMobileNumber} placeholder="Linked Mobile Number" required/>
        </div>
        <div className="mt-4">
          <button className="btn btn-outline-dark rounded-3" type="button" required onClick={handleLink} disabled={mobileNumber.length !== 10} style={{width:'80px'}}>Link</button>
        </div>
        <div className="mt-4">
          <button className="btn btn-outline-primary rounded-2" type="submit" style={{width:'150px'}} disabled={!verify}>Pay &#8377;{selectedFlight ? selectedFlight.Fare :''}</button>
        </div>
      </form>
    </div>
    <div className='mt-5 d-flex justify-content-center '>
    <Link to="/payment" className="btn btn-danger mt-5 fst-italic">
    Back to Payment Methods
  </Link>
  </div>
  </>
)
};
export default Wallets;