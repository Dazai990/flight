import {Link} from 'react-router-dom'
import { CiCreditCard1 } from "react-icons/ci";
import { BsBank } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";
import { useSelectedFlight } from '../../context/FareContext';
const PaymentMethod = ()=>{
  const {selectedFlight} = useSelectedFlight();

    return (
        <div className='back-image'>
        <div className='container-fluid'>
          <div className="pb-5 text-light">
            <h1 className='fst-italic text-dark'><GrMoney /> &nbsp;Make Your Payment</h1>
            {selectedFlight ? (
        <div>
          <h2 className='text-dark'>&#8377;{selectedFlight.Fare}</h2>
        </div>
      ) : (
        <div>
        <h3>No Flight selected</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Go Back to Flight Search
        </Link>
      </div>
      )}
          </div>
          <div className='d-flex flex-column p-5 mt-5 container'>
          <Link
          to="/payment/credit_card"
          className="btn text-start p-3 btnStyle">
          <CiCreditCard1 className="me-2" style={{ fontSize: "23px" }} />
          Credit/Debit/ATM Card
        </Link>
        <Link
          to="/payment/netbanking"
          className="btn text-start p-3 mt-1 btnStyle">
          <BsBank className="me-2" style={{ fontSize: "23px" }} />
          Net Banking
        </Link>
        <Link
          to="/payment/wallets"
          className="btn text-start p-3 mt-1 btnStyle">
          <CiWallet className="me-2" style={{ fontSize: "23px" }} />
          Wallets
        </Link>
        <Link
          to="/payment/upi"
          className="btn text-start p-3 mt-1 btnStyle">
          <PiContactlessPaymentFill className="me-2" style={{ fontSize: "23px" }} />
          UPI
        </Link>
          </div>
        </div>
    </div>
    );
};
export default PaymentMethod;