import React from "react";
import { Carousel } from 'react-bootstrap';
const Home = () => (
  <div >
    <div className="border rounded bg-info m-4">
      <h1 className="text-center">Welcome to the Flight Booking App</h1>
      <p className="text-center">Plan your journey with us!</p>
    </div>

    <div className="carousel slide mx-auto w-50">
        <Carousel className='mt-4'>
          <Carousel.Item>
            <div className="carousel-img-container">
              <img
                className="w-100 d-block"
                src="/assets/yellow.jpeg"
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-img-container">
              <img
                className="w-100 d-block"
                src="/assets/upto.jpeg"
                alt="Second slide"
                />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-img-container">
              <img
                className="w-100 d-block"
                src="/assets/red.jpeg"
                alt="Third slide"
              />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    <div className="container my-4">
      <div className="row">
        <div className="border rounded bg-info  text-center col-md-6">

          <p>
            <h2> Book when it's best with Price <br /> Alerts</h2>
            Found your flight, but not quite ready to book?
            <br />
            Set up Price Alerts and will let you know when your
            <br />
            flight price goes up or down.
          </p>

        </div>

        <div className="border rounded bg-info text-center col-md-6">

          <h2>  Pay less, go further with <br /> transparent pricing</h2>
          <p>

            The cheapest flight deals. No hidden fees. No funny business.
            With us, the price you see when you search is what you’ll pay.
          </p>

        </div>

      </div>
    </div>

 <div style={{fontFamily:'cursive'}}>
    <h2 className="text-center text-black ">Find exclusive offers and the <span className="text-success">best deals</span> available for you.</h2>
 </div>

    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src="/assets/moon.jpeg"
              className="card-img-top"
              alt="Card 1"
            />
            <div className="card-body">
              <h2 className="card-title" >6Exclusive fare</h2>
              <p className="card-text">

                Up to 15% off on flight website & app bookings. T&C apply.
              </p>
              <a href="#" className="btn btn-outline-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img
              // src="/assets/img/ani.jpeg"
              src="/assets/ani.jpeg"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h2 className="card-title">Offer's</h2>
              <p className="card-text">
                Rupay,VISA Cards flight website & app bookings. T&C apply.
              </p>
              <a href="/flights" className="btn btn-outline-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>


);

export default Home;
