export default function TableList({date}){
  return (
    <table className="table-list">
      <caption>Reservations found for this date.</caption>
    <thead>
      <tr>
        <th><strong>TABLE NAME: </strong></th>
        <th><strong>STATUS:</strong></th>
      </tr>
      </thead>
      <tbody className="tablesFoundForDate">
        {/* <Parse date={date} data={reservations} /> */}
        <tr>
          <td>{date.split('T')[0]}</td>
          {/* <td data-table-id-status={`${table.table_id}`}></td> */}
        </tr>
      </tbody>
    </table> )|| null;
}