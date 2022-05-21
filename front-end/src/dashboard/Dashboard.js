import React, { useEffect, useState } from "react";
// import {useParams,useRouteMatch, Route} from "react-router-dom";

import { fetchJson } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import Parse from '../reservations/ParseData.jsx'
// import NewReservation from '../reservations/NewReservation.jsx'
/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard(props) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);

  const parsedUrl = new URL(window.location.href);
  let date = parsedUrl.searchParams.get("date");
  if(!date)date = props.date; 

  useEffect(() => {
    const abortController = new AbortController();
    const fetchResForDate = async() =>{
      setReservationsError(null);
      const url = `http://localhost:5000/reservations?date=${date}`;//process.env.REACT_APP_API_BASE_URL 
      await fetchJson(url,{method:'GET'},[])
        .then(setReservations)
        .catch(setReservationsError);
    }
    fetchResForDate();
    return () => abortController.abort();
  },[date,window.location.href])

  return (
    <main>
      <h1>Dashboard</h1>
      <ErrorAlert error={reservationsError} />
      {reservations.length >= 1 ? 
      <div className="d-md-flex mb-3">
        <h4 className="mb-3 mr-2">Reservations for </h4>
        <div>
          <Parse date={date} data={reservations} />
        </div>
      </div>
      : 
      <div className="d-md-flex mb-3">
        <h4 className="mb-3 mr-3">Reservations for {date}:</h4>
        <h4> No Reservations Found. </h4>
      </div>
      }
    </main>
  );
}

export default Dashboard;
