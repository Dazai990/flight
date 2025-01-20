import { Link,useNavigate } from "react-router-dom";
import { BsBank } from "react-icons/bs";
import { useSelectedFlight } from "../../context/FareContext";

const NetBanking = ()=>{
  const {selectedFlight} = useSelectedFlight();
  const Navigate= useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("Payment Successful");
    Navigate('/')
  }
 return (
   <>
    <div className=" pay-img">
    <div className='head'>
    <h2 className="fst-italic"> <BsBank className="fs-2"/>&nbsp; NetBanking</h2>
    </div>
    <div className="container fom rounded" style={{maxWidth:'800px',marginTop:'50px'}}>
      <form onSubmit={handleSubmit}>
        <h4 className="fst-italic text-start">Login To NetBanking</h4>
        <div className="mt-3 text-start text-light">
        <label className="form-label text-dark" htmlFor="bnk">Select Your Bank</label>
        <select className="form-select" title="Select Your Bank" id="bnk" required>
          <option disabled selected value="">--Select your Bank--</option>
          <option>HDFC Bank</option>
          <option>SBI Bank</option>
          <option>BOI Bank</option>
          <option>AXIS Bank</option>
          <option>Bank Of Baroda</option>
        </select>
        </div>
        <div className="mt-3 text-start text-light">
        <label className="form-label font-weight text-dark" htmlFor="user">Customer ID / User ID</label>
        <input className="form-control" id="user" type="number" title="Customer ID" maxLength='12'onInput={(limit)=>{
          if (limit.target.value>12){
            limit.target.value = limit.target.value.slice(0,12)
          };
        }} placeholder="Enter Your Customer ID" required/>
        </div>
        <div className="mt-5">
        <button className="btn btn-outline-primary" style={{width:'120px'}} type="submit" title="PAY">Pay &#8377;{selectedFlight ? selectedFlight.Fare :''}</button>
        </div>
      </form>
    </div>
      <div className='d-flex justify-content-center '>
    <Link to="/payment" className="btn btn-danger mt-5 fst-italic">
    Back to Payment Methods
  </Link>
  </div>
        </div>
    
   </>
 )
};
export default NetBanking;