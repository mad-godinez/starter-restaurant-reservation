import React from "react";
import {useHistory} from "react-router-dom";
// import {today as getToday} from '../utils/date-time.js'


export default function BtnGroup(){
  const history = useHistory();

  let today = new URL(window.location.href).searchParams.get("date") ? 
             Date.parse(new Date(new URL(window.location.href).searchParams.get("date"))): Date.parse(new Date()),
      yesterday = new Date(today-(1000*60*60*24)),
      tomorrow = new Date((today)+(1000*60*60*24)); 
  today = new Date(); 

  const goTo = (date) => {
    let dateStr = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
    history.push(`/dashboard?date=${dateStr}`)
  }
  
  return(
    <div className="btn-group" >
      <button id="back" className="btn btn-outline-dark" onClick={()=>goTo(yesterday)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 19">
          <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
        </svg>{"  "}Previous
      </button>
      <button id="current" className="btn btn-outline-dark" onClick={()=>goTo(today)}>Today</button>
      <button id="forward" className="btn btn-outline-dark" onClick={()=>goTo(tomorrow)}>Next{"  "}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 19">
          <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
        </svg>
      </button>
    </div>
  );
}