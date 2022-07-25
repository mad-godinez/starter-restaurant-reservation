import React, { useEffect, useState } from "react";
// import {useParams,useRouteMatch, Route} from "react-router-dom";
import BtnGroup from '../layout/NavButtons';
import { fetchJson } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import Parse from '../reservations/ParseData.jsx'
import TableList from './TableList.jsx'
// import NewReservation from '../reservations/NewReservation.jsx'
/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard(props) {
  const [date, setDate] = useState(props.date)
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);

  const fetchResForDate = async() =>{
    setReservationsError(null);
    const url = `http://localhost:5000/reservations?date=${date}`;//process.env.REACT_APP_API_BASE_URL 
    await fetchJson(url,{method:'GET'},[])
      .then(setReservations)
      .catch(setReservationsError);
  }   

  useEffect(() => {
    // const parsedUrl = new URL(window.location.href);
    setDate(new URL(window.location.href).searchParams.get("date")||props.date);
    // console.log(date)
    const abortController = new AbortController();
    fetchResForDate();
    return () => abortController.abort();
  },[date, new URL(window.location.href).searchParams])

  return (
    <main>
      <h1>Dashboard</h1>
      <BtnGroup />
      <ErrorAlert error={reservationsError} />
      
      <div>
        <h4 className="mb-3 mr-3">Reservations:</h4>        
        {reservations.length >= 1 ? 
          <table className="daily-res-chart">
          <caption>Reservations found for this date.</caption>
          <thead>
            <tr>
              <th><strong>NAME: </strong></th>
              <th><strong>NUMBER:</strong></th>
              <th><strong>DATE:</strong> </th>
              <th><strong>TIME: </strong></th>
              <th><strong>PARTY SIZE:</strong></th>
            </tr>
            </thead>
            <tbody className="resFoundForDate">
              <Parse date={date} data={reservations} />
            </tbody>
          </table> 
        : 
          <h4> No Reservations Found. </h4>}
      </div>
      <TableList date={date}/>
    </main>
  );
}

export default Dashboard;
