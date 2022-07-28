import React, { useEffect, useState } from "react";
import {ParseTable} from '../reservations/ParseData.jsx';
import {listTables} from '../utils/api.js';
import {today} from '../utils/date-time.js'

export default function TableList(){
  const [tables, setTables] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    const getDate = async () => {
    let param = new URL(window.location.href).searchParams.get("date") ? 
                new URL(window.location.href).searchParams.get("date") : today();
      setDate(param);
    } 
    getDate();
    listTables(abortController.signal)
      .then(res => setTables(res))
      .catch(err => console.error(err));
    getDate();
    return () => abortController.abort();
  },[date]);

  return (
    <table className="table-list">
      <caption>Table availability for today.</caption>
    <thead>
      <tr>
        <th><strong>TABLE NAME: </strong></th>
        <th><strong>capacity:</strong></th>
        <th><strong>STATUS:</strong></th>
      </tr>
      </thead>
      <tbody className="tablesFoundForDate">
        <ParseTable data={tables}/>
      </tbody>
    </table> )|| null;
}