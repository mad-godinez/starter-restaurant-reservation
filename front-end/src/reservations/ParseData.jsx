export default function Parse({date, data}){

  const reservations = JSON.parse(JSON.stringify(data)).map(({first_name, last_name, mobile_number, reservation_date, reservation_time, people},index)=>{
    return (
    <div key={index} >
      <li><strong>NAME: </strong>{first_name} {last_name}</li>
      <li><strong>NUMBER:</strong> {mobile_number}</li>
      <li><strong>DATE:</strong> {reservation_date.split('T')[0]}</li>
      <li><strong>TIME: </strong>{reservation_time}</li>
      <li><strong>PARTY SIZE:</strong> {people}</li>
    </div>);
  });
  return (
   <section>
    <h4>{date}</h4>
      <ul className="resFoundForDate">
        {reservations}
      </ul>
   </section>
  );
};