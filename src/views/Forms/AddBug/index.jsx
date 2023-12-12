import './style.css';
import React, { useState } from "react";

function PopUpForm(props) {
  const {
    onAddSuccess,
  } = props
  const initialFormState = {
    Project_Id: '',
    Project_Name: '',
    Status: '',
    Description: '',
     
    errors: {
      Project_Id: '',
      Project_Name: '',
      Status: '',
      Description: '',
    }
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const errors = {
      Project_Id: formState.Project_Id ? '' : 'Enter Project Id',
      Project_Name: formState.Project_Name ? '' : 'Enter Project Name',
      Description: formState.Description ? '' : 'Enter Valid Description',
      Status: formState.Status ? '' : 'Enter Status'
    };

    if (Object.values(errors).some(error => error)) {
      setFormState({ ...formState, errors });
      return;
    }
    onAddSuccess(formState);
  };

  return (
    <div>
      <form className="add-bug-form" onSubmit={handleSubmit}>
        <h3>Fill Bug Details Below:</h3>    
          <label for ="Project_Id">Project_Id :
            <input type="text" id="input" value={formState.Project_Id} onChange={e => setFormState({ ...formState, Project_Id: e.target.value })} />
            {formState.errors.Project_Id && <p>{formState.errors.Project_Id}</p>}
          </label>
          <label for ="Project_name">Project_name :
            <input type="text" id="input" value={formState.Project_Name} onChange={e => setFormState({ ...formState, Project_Name: e.target.value })} />
            {formState.errors.Project_Name && <p>{formState.errors.Project_Name}</p>}
          </label>         
          <label htmlFor="Priority">Priority :<br></br>
            <select id="Priority" value={formState.Priority} onChange={(e) => setFormState({ ...formState, Priority: e.target.value })}>
              <option value="blank">------</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            {formState.errors.Priority && <p>{formState.errors.Priority}</p>}
          </label>
          <label htmlFor="Status">Status :
            <select id="Status" value={formState.Status} onChange={(e) => setFormState({ ...formState, Status: e.target.value })}>
              <option value="blank">------</option>
              <option value="Waiting">Waiting</option>
              <option value="On-Going">On-Going</option>
              <option value="Completed">Completed</option>
            </select>
            {formState.errors.Status && <p>{formState.errors.Status}</p>}
          </label>
          <label for ="Description">Description :
            <input type="text" id="input" value={formState.Description} onChange={e => setFormState({ ...formState, Description: e.target.value })} />
            {formState.errors.Description && <p>{formState.errors.Description}</p>}
          </label>
       
          <label for ="Submit">
            <input type="submit" value="Submit" />
          </label>
      </form>                           
    </div>
  );
}
export default PopUpForm;