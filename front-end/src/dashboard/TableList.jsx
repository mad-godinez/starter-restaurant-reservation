import React, { useEffect, useState } from "react";
import {ParseTable} from '../reservations/ParseData.jsx';
import {listTables} from '../utils/api.js';

export default function TableList(){
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listTables([], abortController.signal).then(res => setTables(res));
    return () => abortController.abort();
  },[tables]);

  return (
    <table className="table-list">
      <caption>Table availability for today.</caption>
    <thead>
      <tr>
        <th><strong>TABLE NAME: </strong></th>
        <th><strong>STATUS:</strong></th>
      </tr>
      </thead>
      <tbody className="tablesFoundForDate">
        <ParseTable table={tables}/>
      </tbody>
    </table> )|| null;
}