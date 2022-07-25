/**
 * Conditions & Edge Cases for Reservation Creation
 * F Name & L Name:
 *  minlength = 1, maxlength = 100?
 * Phone #:
 *  digits only, assumes US phone number format
 * Date:
 *  cannot make reservations for a past date
 *  cannot make reservations more than 30 days in advance
 *  cannot make reservations for a Tuesday
 * Time: 
 *  hours of operation 10:30am - 9:30
 *  cannot make reservations for past time
 * Party size:
 *  [1-20]
 */
 import React from "react";
 import {today,asDateString} from './date-time.js'
  
  let errors =  new Set(), errUpdates = new Set(); 

  function mostFutureDate(){
    // const day1 = Date.parse('01 May 2022');
    // let day2 = (Math.floor((day1)+(30*(1000*60*60*24))));
    // console.log(Math.floor(day2-day1)/(1000*60*60*24))//->30
    // console.log(new Date(day2))
    const current_bound = Date.parse(today());
    const future_bound = new Date((current_bound)+(30*(1000*60*60*24)));
    return new Date(future_bound);
  }

  function checkDate(value) {
    if(value < today()) {
      errors.add("Cannot schedule a reservation for a past date.");
      errUpdates.add(value);
    } else if(new Date(value).getDay() === 1){
      errors.add("Cannot schedule a reservation for a Tuesday.");
      errUpdates.add(value);
    } else if(value > asDateString(mostFutureDate())){
      errors.add("Cannot make reservations more than 30 days in advance.");
      errUpdates.add(value);
    }
    return (today() <= value && value <= asDateString(mostFutureDate()));
  }; 

  function checkTime(value) {
    const today = new Date(), 
          current_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if(current_time > value){
      errors.add("Cannot schedule a reservation for a past time.");
      errUpdates.add(value);
    } else if(value < "10:30:00"){
      errors.add("Cannot make reservations before 10:30am.");
      errUpdates.add(value);
    } else if(value >= "9:30:00"){
      errors.add("Cannot make reservations after 9:30pm.");
      errUpdates.add(value);
    }
    return value >= current_time; 
  };

  function checkPartySize(value) {
    if(value < 1 || value > 20){
      errors.add("Party size must be between 1 and 20.");
      errUpdates.add(value);
    }
    return value >= 1 && value <= 20;
  }

  function checkTable(value){
    return true; 
  }

  export default function ErrorList(){
    let allErrors = [...errors].map((value, index)=>{
      return(
        <li key={index} className="error-list-item" >
          <span className="alert alert-danger text-danger" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-exclamation-octagon-fill" viewBox="0 0 16 16">
              <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>{" "}
            {value}
          </span>
        </li>
      );
    });

    return (<ul>{allErrors}</ul>) || null; 
  }

  export const isValid = (name, value) => {
  switch(name) {
    case "reservation_date":
        if(checkDate(value)) errors.delete("Cannot schedule a reservation for a past date.");
        break;
    case "reservation_time":
        if(checkTime(value)) errors.delete("Cannot schedule a reservation for a past time.");
        break;
    case "people":
        if(checkPartySize(value)) errors.delete("Party size must be between 1 and 20.");
        break;
    default:
        if(checkTable(value)) errors.delete("Table is not available.");
        break;
    }
    return errors.size === 0; //returns 0 if no errors
  }