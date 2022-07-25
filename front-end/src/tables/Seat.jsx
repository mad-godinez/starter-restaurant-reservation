import { useParams } from 'react-router-dom';

export default function Seat(){
  const {reservation_id} = useParams();
  return <h1>Seat Reservation #{reservation_id}? Y/N</h1>;
}