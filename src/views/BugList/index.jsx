import React, { useState, useMemo, useCallback } from 'react';
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
  const [dataStatus, setDataStatus] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const deleteItem = useCallback((id) => {
    const deleteAlert = window.confirm("Are you sure you want to delete this row?");
    if (deleteAlert) {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
      localStorage.setItem('formData', JSON.stringify(updatedData));
    }
  }, [data, setData]);  

  const openModal = () => {
    setIsOpen(true);
    setSelectedItem(null);
  };
  
  const closeModal = () => {
    setIsOpen(false);
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

  const searchBugList = useMemo(() => {
    return (searchValue, data) => {
      if (!searchValue) return data;
  
      const search = searchValue.toLowerCase();
      return data.filter(
        (item) =>
          item.Project_Name.toLowerCase().includes(search) ||
          item.Description.toLowerCase().includes(search)
      );
    };
  }, []);

  const filterPriority = (priority) => {
    setDataPriority(priority);
  };

  const filterStatus = (status) => {
    setDataStatus(status);
  };

  const filteredData = useMemo(() => {
    let result = data;
    if (dataPriority) {
      result = result.filter((item) => item.Priority === dataPriority);
    }
    if (dataStatus) {
      result = result.filter((item) => item.Status === dataStatus);
    }
    return searchBugList(searchValue, result);
  }, [data, dataPriority, dataStatus, searchValue]);

  return (
    <>
      <div className="main-bug">
        <div className="nav">
          <Navbar />
        </div>
        <div className="body-wrap">
          <div className="sidebar">
            <Sidebar filterPriority={filterPriority} filterStatus={filterStatus} />
            
          </div>
          <div className="buglist">
            <div className="buglist-top">
              <h2>Bugs</h2>
              <div className="right">
              <SearchWord searchValue={searchValue} setSearchValue={setSearchValue} className="search" />
              <Button onClick={openModal} title="Add Bug" className="button" />
              </div>
            </div>
            <Modal
              isOpen={isOpen}
              closeModal={closeModal}
              submitData={onAddSuccess}
              selectedItem={selectedItem ? data.find(item => item.id === selectedItem) : null}
            />
            <table className="table-main">
              <thead>
                <tr className='thead'>
                  <th><i class="fa-solid fa-bug fa-xs"></i>&nbsp;&nbsp;Bug Name</th>
                  <th><i class="fa-solid fa-diagram-project fa-xs"></i>&nbsp;&nbsp;Project Name</th>
                  <th><i class="fa-brands fa-superpowers fa-xs"></i>&nbsp;&nbsp;Priority</th>
                  <th><i class="fa-solid fa-check-double fa-xs"></i>&nbsp;&nbsp;Status</th>
                  <th><i class="fa-solid fa-circle-info fa-xs"></i>&nbsp;&nbsp;Description</th>
                  <th><i class="fa-solid fa-user fa-xs"></i>&nbsp;&nbsp;Reported By</th>
                  <th><i class="fa-solid fa-flag fa-xs"></i>&nbsp;&nbsp;Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.Bug_Name}</td>
                      <td>{item.Project_Name}</td>
                      <td>{item.Priority}</td>
                      <td>{item.Status}</td>
                      <td>{item.Description}</td>
                      <td>{item.Reportedby}</td>
                      <td>
                        <div className="icons">
                        <button onClick={() => editData(item.id)} className='edit-icon' title='edit'>
                          <i className="fa-solid fa-file-pen fa-lg  "></i>
                        </button>
                        <button onClick={() => deleteItem(item.id)} className='delete-icon' title='delete'>
                          <i className="fa-solid fa-trash fa-lg"></i>
                        </button>
                        </div>
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
