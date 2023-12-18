import ChooseDate from '../../Date';
import './style.css';
import React, { useEffect, useState } from "react";

function PopUpForm(props) {
  const {
    onAddSuccess, bugtoEdit
  } = props

  const initialFormState = {
    Bug_Name: '',
    Project_Name: '',
    Status: '',
    Description: '',
    Priority: '',
    // Date:'',
    Reportedby:'',
     
    errors: {
      Bug_Name: '',
      Project_Name: '',
      Status: '',
      Description: '',
      Priority: '',
      // Date:'',
      Reportedby:'',
    }
  };

  useEffect(() => {
    if (bugtoEdit) {
      setFormState(prevState => ({
        ...prevState,
        Bug_Name: bugtoEdit.Bug_Name || '',
        Project_Name: bugtoEdit.Project_Name || '',
        Status: bugtoEdit.Status || '',
        Description: bugtoEdit.Description || '',
        Priority: bugtoEdit.Priority || '',
        Reportedby: bugtoEdit.Reportedby || '',
      }));
    }
  }, [bugtoEdit]);


  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const errors = {
      Bug_Name: formState.Bug_Name ? '' : 'Enter Bug Name ',
      Project_Name: formState.Project_Name ? '' : 'Enter Project Name',
      Description: formState.Description ? '' : 'Enter Valid Description',
      // Date: formState.Date ? '' : 'Enter Valid Date',
      Priority: formState.Priority ? '' : 'Choose Priority',
      Status: formState.Status ? '' : 'Choose Status',
      Reportedby: formState.Reportedby ? '' : 'Enter your Name',
    };

     if (Object.values(errors).some(error => error)) {
      setFormState(prevState => ({ ...prevState, errors }));
      return;
    }
    onAddSuccess(formState);
  };

  return (
    <div>
      <form className="add-bug-form" onSubmit={handleSubmit}>
        <h2>Fill Bug Details Below:</h2>  

          <label htmlFor ="Bug_Name">Bug Name :
            <input type="text" id="input" value={formState.Bug_Name} onChange={e => setFormState({ ...formState, Bug_Name: e.target.value })} />
            {formState.errors.Bug_Name && <p>{formState.errors.Bug_Name}</p>}
          </label>  

          <label for ="Project_name">Project Name :
            <input type="text" id="input" value={formState.Project_Name} onChange={e => setFormState({ ...formState, Project_Name: e.target.value })} />
            {formState.errors.Project_Name && <p>{formState.errors.Project_Name}</p>}
          </label>     
    
          <div className="dropdown">
          <label htmlFor="Priority">Priority :<br></br>
            <select id="Priority" className='drop' value={formState.Priority} onChange={(e) => setFormState({ ...formState, Priority: e.target.value })}>
              <option value="blank">------</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            {formState.errors.Priority && <p>{formState.errors.Priority}</p>}
          </label>

          <label htmlFor="Status">Status :<br></br>
            <select id="Status" className='drop' value={formState.Status} onChange={(e) => setFormState({ ...formState, Status: e.target.value })}>
              <option value="blank">------</option>
              <option value="Waiting">Waiting</option>
              <option value="On-Going">On-Going</option>
              <option value="Completed">Completed</option>
            </select>
            {formState.errors.Status && <p>{formState.errors.Status}</p>}
          </label>

          </div>
          <label htmlFor ="Description">Description :
            <input type="text" id="input" value={formState.Description} onChange={e => setFormState({ ...formState, Description: e.target.value })} />
            {formState.errors.Description && <p>{formState.errors.Description}</p>}
          </label>

          <label htmlFor='Date'>
            <div>
              {/* <ChooseDate /> */}
               {/* {formState.errors.Date && <p>{formState.errors.Date}</p>} */}
            </div>
          </label>

          <label htmlFor ="Reportedby">Reported by :
            <input type="text" id="input" value={formState.Reportedby} onChange={e => setFormState({ ...formState, Reportedby: e.target.value })} />
            {formState.errors.Reportedby && <p>{formState.errors.Reportedby}</p>}
          </label>  
  
          <div className="btn">
          <label for ="Submit">
            <input type="submit" className="submit" value="Submit" />
          </label>
          </div>
      </form>                           
    </div>
  );
}
export default PopUpForm;