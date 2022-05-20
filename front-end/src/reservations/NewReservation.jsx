// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import upload from './form-utils';
import '../css/style.css';
export default function NewReservation(){
  const emptyForm = {
    "first_name":"",
    "last_name":"",
    "mobile_number":"", 
    "reservation_date":"",
    "reservation_time":"",
    "people":""
  }; 
  const [formData, setFormData] = useState({...emptyForm});

  const fieldChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value});
  }; 
  const submitReservation = async (event) => {
    event.preventDefault();
    await upload(formData).then(()=>setFormData({...emptyForm}));
  }

  return (
    <section className="createRes">
      <h1>Create Reservation</h1>
      <form className="new-res-form" onSubmit={submitReservation}>
        <div className="form-fields">
          <label htmlFor="first_name">
            <input type="text" name="first_name"  autoFocus={true} placeholder="First Name" aria-label="firstNameInput"  value={formData.first_name} onChange={fieldChange}required/>
          </label>
          <label htmlFor="last_name">
            <input type="text" name="last_name"  placeholder="Last Name" aria-label="lastNameInput" value={formData.last_name} onChange={fieldChange} required/>
          </label>
          <label htmlFor="mobile_number">
            <input type="tel" name="mobile_number" autoComplete="tel" placeholder="Mobile Number" aria-label="mobileNumInput" pattern="[0-9]{10}" value={formData.mobile_number} onChange={fieldChange} required/>
          </label>
          <label htmlFor="reservation_date">
            <input type="date" name="reservation_date"  placeholder="Date of Reservation" aria-label="reservationDateInput"value={formData.reservation_date} onChange={fieldChange} required />
          </label>
          <label htmlFor="reservation_time">
            <input type="time" name="reservation_time"  placeholder="Time of Reservation" aria-label="reservationTimeInput"value={formData.reservation_time} onChange={fieldChange} required />
          </label>
          <label htmlFor="people">
            <input type="number" name="people"  placeholder="Party Size (at least 1)" aria-label="peopleInput" min="1" value={formData.people} onChange={fieldChange} required />
          </label>
        </div>
        <div className="btn-group">
          <button className="btn btn-danger" type="reset" onClick={()=>setFormData({...emptyForm})}>Cancel</button>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </section>
  ); 
};