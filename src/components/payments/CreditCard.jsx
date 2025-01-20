import { CiCreditCard1 } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useSelectedFlight } from "../../context/FareContext";
const CreditCard = ()=>{
  const {selectedFlight} = useSelectedFlight();
  const navigation = useNavigate();

  const handleSubmit = e=>{
    e.preventDefault();
    alert("Payment Successful");
    navigation('/payment')
  }
  return (
    <>
        <div className='head'>
        <h2 className='fst-italic'><CiCreditCard1 className="fs-1"/>&nbsp;&nbsp; Credit / Debit / ATM Card</h2>
        </div>
        <div className='container mt-5 rounded fom' style={{maxWidth:'800px'}}>
          <form onSubmit={handleSubmit}>
                 <div className='mt-4 pt-4'>
                 <label className='form-label text-start fs-5' htmlFor='cd'>Card Number</label>
                 <div className="input-group">
              <span className="input-group-text">
                <CiCreditCard1 className="fs-4"/>
              </span>
                 <input title="Card Number should be 16 digits" className='form-control' type="number" id='cd' placeholder='xxxx xxxx xxxx xxxx' onInput={(limit) => {
                   if (limit.target.value.length > 16) {
                     limit.target.value = limit.target.value.slice(0, 16);
                    }
                  }}  required />
                  </div>
                  </div>
                  <div className='mt-3 d-flex justify-content-around'>
                  <div className="me-1 pt-2">
                <label className='form-label fs-5' htmlFor="va">Validity</label>
                <input title="Enter Valid Month & Year" className="form-control mt-4" type="text" id="va" placeholder="MM/YY" maxLength="5" 
          onInput={(val) => {
            let inputValue = val.target.value;
            inputValue = inputValue.replace(/\D/g, '');
            inputValue = inputValue.replace(/(\d{2})(\d{1,2})?/, (match, p1, p2) => {
              const month = Number(p1); 
              if (month < 1 || month > 12) return ''; 
              return p2 ? `${p1}/${p2}` : p1;
            }); val.target.value = inputValue;
          }} required/>
         </div>
         <div className='ms-1 pt-2'>  
    <label className='form-label' htmlFor='cvv'>CVV</label>
    <input className='form-control mt-4' type='number' id='cvv' placeholder='cvv' onInput={(limit)=>{
      if (limit.target.value.length>3) {
        limit.target.value = limit.target.value.slice(0,3);
      } 
    }}required/>    
    </div>
    </div>
    <div className='mt-5'>
    <button className='btn btn-primary' style={{width:'120px'}} type='submit'>Pay &#8377;{selectedFlight ? selectedFlight.Fare :''}</button>
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
export default CreditCard;