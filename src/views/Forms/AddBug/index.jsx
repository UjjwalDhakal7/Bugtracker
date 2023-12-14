import './style.css';
import React, { useState } from "react";

function PopUpForm(props) {
  const {
    onAddSuccess,
  } = props
  const initialFormState = {
    Bug_Name: '',
    Project_Name: '',
    Status: '',
    Description: '',
    Reportedby:'',
     
    errors: {
      Bug_Name: '',
      Project_Name: '',
      Status: '',
      Description: '',
      Reportedby:'',
    }
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const errors = {
      Bug_Name: formState.Bug_Name ? '' : 'Enter Bug Name ',
      Project_Name: formState.Project_Name ? '' : 'Enter Project Name',
      Description: formState.Description ? '' : 'Enter Valid Description',
      Status: formState.Status ? '' : 'Enter Status',
      Reportedby: formState.Reportedby ? '' : 'Enter your Name',
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
          <label for ="Bug_Name">Bug Name :
            <input type="text" id="input" value={formState.Bug_Name} onChange={e => setFormState({ ...formState, Bug_Name: e.target.value })} />
            {formState.errors.Bug_Name && <p>{formState.errors.Bug_Name}</p>}
          </label>  
          <label for ="Project_name">Project Name :
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
          <label for ="Reportedby">Reported by :
            <input type="text" id="input" value={formState.Reportedby} onChange={e => setFormState({ ...formState, Reportedby: e.target.value })} />
            {formState.errors.Reportedby && <p>{formState.errors.Reportedby}</p>}
          </label>    
          <label for ="Submit">
            <input type="submit" value="Submit" />
          </label>
      </form>                           
    </div>
  );
}
export default PopUpForm;