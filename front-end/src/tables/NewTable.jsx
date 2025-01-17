import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import upload from '../reservations/form-utils.jsx';
import ErrorList, {isValid} from '../utils/validateData.js';

export default function NewTable(){
  const history = useHistory();
  const emptyForm = {
    "table_name":"",
    "capacity":"",
  };
  const [formData, setFormData] = useState({...emptyForm});
  const [errorList, setErrorList] = useState(true);

  const fieldChange = ({target}) => { 
    setFormData({...formData, [target.name]: target.value});
    updateErrorList(target);
  }
  const updateErrorList = (target) => setErrorList(isValid(target.name, target.value));

  const submitReservation = async (event) => {
    event.preventDefault();
    await upload(formData);
    return history.push(`/dashboard`);
  }

  return(
    <div>
      <section className="createTable">
        <h1>Update a Reservation's Table</h1>
        <div id="err-container">
          <ErrorList />
        </div>
        <form className="new-table-form" onSubmit={submitReservation}>
          <div className="form-fields">
            <label htmlFor="table_name"> 
              <input name="table_name" 
                    placeholder="Table Name: #"
                    aria-label="Table Name"
                    autoFocus={true} 
                    type="text" 
                    minLength="2" 
                    value={formData.table_name} onChange={fieldChange}
                    required /> 
            </label>
            <label htmlFor="table_capacity">
              <input name="capacity" 
                    placeholder="Table Capacity:"
                    aria-label="Table Capacity" 
                    type="number" 
                    min="1" 
                    max="20" 
                    value={formData.capacity} onChange={fieldChange}
                    required />
            </label>
          </div>
          <div className="form-btn-group">
            <button
              className="btn btn-secondary" 
              type="reset" 
              onClick={()=>{setFormData({...emptyForm});return history.goBack()}}>Cancel</button>
            <button className="btn btn-primary" type="submit" disabled={(!errorList)}>Submit</button>
          </div>
        </form> 
      </section>
    </div>
  );  
};