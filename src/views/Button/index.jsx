import react from 'react'
import './style.css'
// import AddBug from '../Forms/AddBug';
import PopupForm from '../Forms/AddBug';



function AddBtn (){
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={toggleForm}>Add Bug</button>
      {showForm && (
        <div className="popup">
            <div className="top-row">
                    <h3>!! Bug Details !!</h3>
                    <button className="btn-close" onClick={toggleForm}>X</button>
            </div>
            <form className="add-bug-form" onSubmit={handleSubmit}>        
                <label for ="Project_Id">Project_Id :
                    <input type="text" id="input" name="project_Id" placeholder="Enter project id here"/>
                </label>
                <label for ="Project_name">Project_name :
                    <input type="text" id="input" name="project_Id" placeholder="Enter project id here"/>
                </label>
                <label for ="Status">Status :
                    <input type="text" id="input" name="status" placeholder="Enter project status here"/>
                </label>
                <label for ="Description">Description :
                    <input type="text" id="input" name="description" placeholder="Enter project description here"/>
                </label>
                <label for ="Remarks">Remarks:
                    <input type="text" id="input" name="Project_Id" placeholder="Enter project id here"/>
                </label>
                <div className="bottom-btn">
                <label for ="Submit">
                    <input type="button" name="submit" value="Submit"/>
                </label>
                <label for ="Clear">
                    <input type="button" name="clear" value="Clear"/>
                </label>
                </div>
            </form>
        </div>
      )}
    </div>
  );
};

export default AddBtn;