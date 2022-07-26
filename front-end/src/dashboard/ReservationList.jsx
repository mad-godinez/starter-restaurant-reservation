import React, { useEffect, useState } from "react";
import Parse from '../reservations/ParseData.jsx';
import {listReservations} from '../utils/api.js';

export default function ReservationList(props){
  const [reservations, setReservations] = useState([]);
  const [date, setDate] = useState(props.date);

  useEffect(() => {
    const abortController = new AbortController();

    setDate(new URL(window.location.href).searchParams.get("date"));
    listReservations(date)
      .then(res => setReservations(res))
      .catch(err => console.error(err));
    
    return () => abortController.abort();
  }, [date]); 

  return ( 
     reservations ?
      <section>
        <h4 className="mb-3 mr-3">Reservations:</h4>         
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
            <Parse data={reservations} />
          </tbody>
        </table>
      </section>
    : 
    <h4 className="mb-3 mr-3"> No Reservations Found.</h4>
   );
}