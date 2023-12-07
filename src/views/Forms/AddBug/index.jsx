import React from "react";
import { useState } from 'react';
import './style.css'

function PopupForm (){
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

    const [Project_Id, setProject_Id] = useState('');
    const [Project_name, setProject_name] = useState('');
    const [Status, setStatus] = useState('');
    const [Description, setDescription] = useState('');

    const [errorProject_Id, setProject_Iderror] = useState('');
    const [errorProject_name, setProject_nameerror] = useState('');
    const [errorStatus, setStatuserror] = useState('');
    const [errorDescription, setDescriptionerror] = useState('');

    function validateForm(){
      var fields = JSON.parse(localStorage.getItem('fields') || "[]")
      var field = {
        Project_Id : Project_Id,
        Project_name : Project_name,
        Status : Status,
        Description : Description
      }
      fields.push(field);
      localStorage.setItem('fields', JSON.stringify(fields));

      

      if (Project_Id.length == 0){
        setProject_Iderror = 'Enter valid Project Id'
      }
      if (Project_name.length == 0){
        setProject_nameerror = 'Enter valid Project_name'
      }
      if (Status.length == 0){
        setStatuserror = 'Enter valid Status'
      }
      if (Description.length == 0){
        setDescriptionerror = 'Enter valid Description'
      }

      return !(errorProject_Id || errorProject_name || errorStatus || errorDescription);
    }
    
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
                    <input type="text" id="input" name="project_Id" placeholder="Project_Id" onChange={(e) => setProject_Id(e.target.value)}/>
                    {errorProject_Id && <p>{setProject_Iderror}</p>}
                </label>
                <label for ="Project_name">Project_name :
                    <input type="text" id="input" name="project_Id" placeholder="Project_name" onChange={(e) => setProject_name(e.target.value)}/>
                    {errorProject_name && <p>{setProject_nameerror}</p>}
                </label>
                <label for ="Status">Status :
                    <input type="text" id="input" name="status" placeholder="Status" onChange={(e) => setStatus(e.target.value)}/>
                    {errorStatus && <p>{setStatuserror}</p>}
                </label>
                <label for ="Description">Description :
                    <input type="text" id="input" name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                    {errorDescription && <p>{setDescriptionerror}</p>}
                </label>
                <label for ="Submit">
                <input type="submit" onClick={() => {validateForm()}}/>
                </label>
            </form>
        </div>
      )}
    </div>
  );
};

export default PopupForm;




             
        
