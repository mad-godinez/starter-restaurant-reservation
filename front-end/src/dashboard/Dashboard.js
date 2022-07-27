//import React, { useEffect, useState } from "react";
// import {useParams,useRouteMatch, Route} from "react-router-dom";
import BtnGroup from '../layout/NavButtons';
// eslint-disable-next-line
import ErrorAlert from "../layout/ErrorAlert";
import ReservationList from './ReservationList.jsx';
import TableList from './TableList.jsx';
// import NewReservation from '../reservations/NewReservation.jsx'
/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard(props){
  return (
    <main>
      <h1>Dashboard</h1>
      <BtnGroup />
      {/* <ErrorAlert error={reservationsError} /> */}
      <div>
        <ReservationList />
        <TableList />
      </div>
    </main>
  );
}

export default Dashboard;
