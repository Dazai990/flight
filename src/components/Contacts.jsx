import { BsFillTelephoneFill } from "react-icons/bs";
import { FaXbox } from "react-icons/fa";

const Contacts = () => (
  <div className="text-start">
    <h1 className="text-center">Contact Us</h1>
    <h2 className="ms-4 mt-5">Registered office</h2>
    <p className="mt-4 ms-5">
      CIN : L62100DL2004PLC129768
      <br />
      Upper Ground Floor, Thapar House, Gate No. 2,
      Western Wing, 124 Janpath,
      <br /> New Delhi - 110001 India.
      </p>

      <br/>

     <p className="ms-5"><FaXbox />Fax : +91 11-44550200</p> 
     

    <h2 className="ms-4 mt-5">Corporate office</h2>
    <p className="mt-5 ms-5 ">
      Third floor, Emaar Capital Tower 2, Mehrauli - Gurgaon Road, Gurugram, Haryana – 122002
      <br />
    </p>

    <p className="ms-5">
      <BsFillTelephoneFill />Tel : +91 (0)124 435 2500
      <br/>
      <FaXbox />Fax : +91 (0)124 406 8536
    </p>


    <br />

     



    <h2 className="ms-4 mt-5">Customer Support</h2>
    <p className="mt-5 ms-5">
      India : 0124-6173838, 0124-4973838
      <br />

      *Calls may be recorded for training and quality purposes and for compliance with applicable regulatory requirements</p>


    <div className="d-flex flex-column">
      <img src="/assets/woo.jpeg" className="img-fluid mt-auto" alt="image" />
    </div>


  </div>
);

export default Contacts;
