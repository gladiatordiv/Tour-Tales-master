import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userId: '01',
    userEmail: 'example@gmail.com',
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  // send data to the server
  const handleClick = (e) => {
    e.preventDefault();
    // Send credentials data to the server here.
    // Assuming there's a function named "sendDataToServer" that handles this.
    //sendDataToServer(credentials);
    navigate('/thank-you');
  };

  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>
          ${price}
          <span>/per person</span>
        </h3>
        <span className="tour_rating d-flex align-items-center">
          <i className="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* -----------------BOOKING FORM-----------*/}
      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking_info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder=" Full Name "
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder=" Phone "
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-centre gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              min={new Date().toISOString().split('T')[0]} // Restrict past dates
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder=" Guest "
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* -----------------BOOKING END-----------*/}
      {/* -----------------BOOKING BOTTOM-----------*/}
      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary_btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
