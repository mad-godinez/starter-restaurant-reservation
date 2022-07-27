export default function Parse({data}){
  console.log(data)
  const reservations = JSON.parse(JSON.stringify(data)).map(({first_name, last_name, mobile_number, reservation_date, reservation_time, people},index)=>{
    return (
      <tr key={index}>
        <td>{first_name} {last_name}</td>
        <td>{mobile_number}</td>
        <td>{reservation_date.split('T')[0]}</td>
        <td>{reservation_time}</td>
        <td>{people}</td>
        <td>
          <a href={`/reservations/${++index}/seat`}>
            <button className="btn btn-primary">SEAT</button>
          </a> 
        </td>
      </tr> 
    );
  });
  return reservations;
};
export function ParseTable({data}){
  // console.log(data)
  const tables = data.map(({reservation_id, table_name, capacity},index)=>{
    return (
      <tr key={index}>
        <td>{table_name}</td>
        <td>{capacity}</td>
        <td data-table-id-status={index}>{
          reservation_id === null ? "Free" : "Occupied" 
        }</td>
      </tr> 
    );
  });
  return tables;
}