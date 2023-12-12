import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/index.jsx';
import Sidebar from '../Sidebar/index.jsx';
import Button from '../Button/index.jsx';
import Modal from '../Modal/index.jsx';
import './style.css';

function BugList() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 
  const [dataPriority, setDataPriority] = useState(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem('formData');
    if (localStorageData) {
      const formDataArray = JSON.parse(localStorageData);
      setData(formDataArray);
    }
  }, []);

  function deleteItem(index) {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setSelectedItem(null); 
  };

  const onAddSuccess = (formData) => {
    if (selectedItem !== null) {
      const updatedData = [...data];
      updatedData[selectedItem] = formData;
      setData(updatedData);
      setSelectedItem(null); 
    } else {
      setData((oldValues) => [...oldValues, formData]);
    }
    setIsOpen(false);
  };

  const editData = (index) => {
    setSelectedItem(index);
    setIsOpen(true);
  };

  const filterPriority = (priority) => {
    setDataPriority(priority);
  };

  const filteredData = dataPriority
    ? data.filter((item) => item.Priority === dataPriority)
    : data;

  return (
    <>
      <div className="main">
        <div className="nav">
          <Navbar />
        </div>
        <div className="body-wrap">
          <div className="sidebar">
          <Sidebar filterPriority={filterPriority} />
          </div>
          <div className="buglist">
            <div className="buglist-top">
              <h2>Bug List</h2>
              <Button onClick={toggleModal} title="Add Bug" />
            </div>
            <Modal isOpen={isOpen} closeModal={toggleModal} submitData={onAddSuccess} selectedItem={data[selectedItem]}>
            </Modal>
            <table className='table-main'>
              <thead>
                <tr>
                  <th>Project_Id</th>
                  <th>Project_Name</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Project_Id}</td>
                      <td>{item.Project_Name}</td>
                      <td>{item.Priority}</td>
                      <td>{item.Status}</td>
                      <td>{item.Description}</td>
                      <td>
                        <button onClick={() => editData(index)}>
                          <i className="fa-solid fa-file-pen"></i>
                        </button>
                        <button onClick={() => deleteItem(index)}>
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6}>There are no bugs as of now.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default BugList;
