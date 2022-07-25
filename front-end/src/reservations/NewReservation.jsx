import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Routes from "../layout/Routes.js";
import upload from './form-utils';
import ErrorList, {isValid} from '../utils/validateData.js';
import '../css/style.css';

export default function NewReservation(){
  const history = useHistory();
  const emptyForm = {
    "first_name":"First",
    "last_name":"Last",
    "mobile_number":"Phone", 
    "reservation_date":"",
    "reservation_time":"",
    "people":""
  }; 

  const [formData, setFormData] = useState({...emptyForm});
  const [resDate, setResDate] = useState(null);
  const [errorList, setErrorList] = useState(true);

  const emptyTextField = ({target}) => target.value = "";
  
  const fieldChange = ({target}) => { 
    setFormData({...formData, [target.name]: target.value});
    updateErrorList(target);
  }
  
  const updateErrorList = (target) => setErrorList(isValid(target.name, target.value));

  const submitReservation = async (event) => {
    event.preventDefault();
    await upload(formData).then(
                                setResDate(<Routes date={formData.reservation_date}/>));
    return history.push(`/dashboard?date=${formData.reservation_date}`);
  }

  return (
    <div>
      <section className="createRes">
        <h1>Create Reservation</h1>
        <div id="err-container">
          <ErrorList />
        </div>
        <form className="new-res-form" onSubmit={submitReservation}>
          <div className="form-fields">
            <label htmlFor="first_name">
              <input
                type="text" 
                name="first_name" 
                autoFocus={true} 
                aria-label="firstNameInput" 
                minLength="1"
                maxLength="100"
                onClick={emptyTextField} value={formData.first_name} onChange={fieldChange} 
                required />
            </label>
            <label htmlFor="last_name">
              <input 
                type="text" 
                name="last_name" 
                aria-label="lastNameInput"
                minLength="1"
                maxLength="100" 
                onClick={emptyTextField} value={formData.last_name} onChange={fieldChange} 
                required />
            </label>
            <label htmlFor="mobile_number">
              <input
                type="tel" 
                name="mobile_number" 
                autoComplete="tel" 
                aria-label="mobileNumInput" 
                pattern="[0-9]{10}"
                onClick={emptyTextField} value={formData.mobile_number} onChange={fieldChange} 
                required />
            </label>
            <label htmlFor="reservation_date">
              <input
                type="date" 
                name="reservation_date" 
                placeholder="Date of Reservation" 
                aria-label="reservationDateInput"
                value={formData.reservation_date} onChange={fieldChange}
                required />
            </label>
            <label htmlFor="reservation_time">
              <input
                type="time" 
                name="reservation_time" 
                min="09:00"
                max="24:00"
                placeholder="Time of Reservation" 
                aria-label="reservationTimeInput"
                value={formData.reservation_time} onChange={fieldChange} 
                required />
            </label>
            <label htmlFor="people">
              <input
                type="number" 
                name="people" 
                placeholder="Party Size (1-20 people)" 
                aria-label="peopleInput"
                min="0" 
                max="21" 
                value={formData.people} onChange={fieldChange} 
                required />
            </label>
          </div>
          <div className="form-btn-group">
            <button
              className="btn btn-secondary" 
              type="reset" 
              onClick={()=>{setFormData({...emptyForm});return history.goBack()}}>Cancel</button>
            <button className="btn btn-primary" type="submit" disabled={(!errorList)}>Submit</button>
          </div>
        </form> 
      </section> 
      {resDate}
    </div>
  ); 
};