import React, { useEffect, useState } from "react";
import {ParseTable} from '../reservations/ParseData.jsx';
import {listTables} from '../utils/api.js';

export default function TableList(){
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listTables()
    return () => abortController.abort();
  },[]);

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
        {/* <Parse table={}/> */}
      </tbody>
    </table> )|| null;
}