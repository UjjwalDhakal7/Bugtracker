import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../NavBar/index.jsx';
import Sidebar from '../Sidebar/index.jsx';
import Button from '../Button/index.jsx';
import Modal from '../Modal/index.jsx';
import SearchWord from '../Search/index.jsx';
import './style.css';

function BugList() {
  const [data, setData] = useState(() => {
    const localStorageData = localStorage.getItem('formData');
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dataPriority, setDataPriority] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  function deleteItem(id) {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setSelectedItem(null);
  };

  const onAddSuccess = (formData) => {
    if (selectedItem !== null) {
      const updatedData = data.map(item => (item.id === selectedItem ? formData : item));
      setData(updatedData);
      setSelectedItem(null);
    } else {
      formData.id = Date.now(); 
      setData((oldValues) => [...oldValues, formData]); 
    }
    localStorage.setItem('formData', JSON.stringify(data));
    setIsOpen(false);
  };
  

  const editData = (id) => {
    setSelectedItem(id);
    setIsOpen(true);
  };

  const searchBugList = (searchValue, data) => {
    if (!searchValue) return data;

    const search = searchValue.toLowerCase();
    return data.filter(
      (item) =>
        item.Project_Name.toLowerCase().includes(search) ||
        item.Description.toLowerCase().includes(search)
    );
  };

  const filterPriority = (priority) => {
    setDataPriority(priority);
  };

  const filteredData = useMemo(() => {
    let result = data;
    if (dataPriority) {
      result = result.filter((item) => item.Priority === dataPriority);
    }
    return searchBugList(searchValue, result);
  }, [data, dataPriority, searchValue]);

  return (
    <>
      <div className="main-bug">
        <div className="nav">
          <Navbar />
        </div>
        <div className="body-wrap">
          <div className="sidebar">
            <Sidebar filterPriority={filterPriority} />
          </div>
          <div className="buglist">
            <div className="buglist-top">
              <div className="left"><h2>Bug List</h2></div>
              <div className="right">
              <SearchWord searchValue={searchValue} setSearchValue={setSearchValue} />
              <Button onClick={toggleModal} title="Add Bug" className="button" />
              </div>
            </div>
            <Modal
              isOpen={isOpen}
              closeModal={toggleModal}
              submitData={onAddSuccess}
              selectedItem={selectedItem ? data.find(item => item.id === selectedItem) : null}
            />
            <table className="table-main">
              <thead>
                <tr>
                  <th>Project Id</th>
                  <th>Project Name</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Description</th>
                  <th>Reported By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.Project_Name}</td>
                      <td>{item.Priority}</td>
                      <td>{item.Status}</td>
                      <td>{item.Description}</td>
                      <td>{item.Reportedby}</td>
                      <td>
                        <button onClick={() => editData(item.id)}>
                          <i className="fa-solid fa-file-pen"></i>
                        </button>
                        <button onClick={() => deleteItem(item.id)}>
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7}>There are no bugs as of now.</td>
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
