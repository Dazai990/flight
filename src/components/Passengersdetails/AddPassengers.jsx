import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const AddPassengers = ({ setPassengers }) => {
  const location = useLocation();
  const {selectedFlight} = location.state || {};
  const [passengers, setPassengerDetails] = useState([{ name: '', age: '', contact: '' }]);
  const navigate = useNavigate();

  const handleAddPassenger = () => {
    setPassengerDetails([...passengers, { name: '', age: '', contact: '' }]);
  };

  const handleChange = (index, event) => {
    const newPassengers = passengers.map((passenger, i) => {
      if (i === index) {
        return { ...passenger, [event.target.name]: event.target.value };
      }
      return passenger;
    });
    setPassengerDetails(newPassengers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassengers(passengers);
    navigate('/ticket-review');
  };

  return (
    <div className='bod'>
      <div className="carousel slide mx-auto w-50">
        <Carousel>
          <Carousel.Item className='mt-4'>
            <div className="carousel-img-container">
              <img
                className="w-100 d-block"
                src="./assets/1.jpg"
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='mt-4'>
            <div className="carousel-img-container">
              <img
                className="w-100 d-block"
                src="/assets/off-2.webp"
                alt="Second slide"
                />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='mt-4'>
            <div className="carousel-img-container">
              <img
                className="w-100 d-block"
                src="./assets/off-3.jpg"
                alt="Third slide"
              />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container sty">
        <h1 style={{fontFamily:'monospace'}}>Passenger Details</h1>
        <form onSubmit={handleSubmit}>
          {passengers.map((passenger, index) => (
            <div className='mt-5' key={index}>
              <h3>Passenger {index + 1}</h3>
              <div className='mt-3'>
                <input
                  className='form-control p-2 rounded-3'
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={passenger.name}
                  onChange={(event) => handleChange(index, event)}
                  required
                />
              </div>
              <div className='mt-3'>
                <input
                  className='form-control p-2 rounded-3'
                  type="number"
                  name="age"
                  placeholder="Age"
                  min='2'
                  value={passenger.age}
                  onChange={(event) => handleChange(index, event)}
                  required
                />
              </div>
              <div className='mt-3'>
                <input
                  className='form-control p-2 rounded-3'
                  type="tel"
                  name="contact"
                  placeholder="Phone-No."
                  value={passenger.contact}
                  onChange={(event) => handleChange(index, event)}
                  pattern="\d{10}"
                  onInput={(limit)=>{
                    if (limit.target.value>10){
                      limit.target.value= limit.target.value.slice(0,10)
                    };
                  }}
                  title="Enter a valid 10-digit phone number"
                  required
                />
              </div>
            </div>
          ))}
          <div className='d-flex justify-content-evenly mt-5'>
            <button className='rounded' type="button" onClick={() => navigate(-1)}>Go Back</button>
            <button className='rounded' type="button" onClick={handleAddPassenger}>Add Passenger</button>
            <Link to='/payment' state = {{ fare: selectedFlight.Fare }} className='btn btn-light' type="submit">Proceed to payment</Link>
          </div>
        </form>
      </div>
          </div>
  );
};

export default AddPassengers;
