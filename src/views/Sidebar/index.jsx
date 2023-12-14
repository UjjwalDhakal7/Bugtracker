import {React, useState} from 'react';
import './style.css';

function Sidebar({ filterPriority, filterStatus }) {
  const handlePriority = (e) => {
    const selectedPriority = e.target.value;
    filterPriority(selectedPriority);
  };

  const [selectedStatus, setSelectedStatus] = useState('');
  const handleStatusChange = (e) => {
    const status = e.target.value;
    setSelectedStatus(status);
    filterStatus(status); 
  };

  return (
    <>
      <aside className='sidebar'>
        <h2>Filters</h2>
        <div className="filter">
          <h3>Priority</h3>
          <select id="Status" onChange={handlePriority}>
            <option value="">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <h3>Status</h3>
          <select id="statusFilter" value={selectedStatus} onChange={handleStatusChange}>
            <option value="">All</option>
            <option value="Waiting">Waiting</option>
            <option value="On-Going">On-Going</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
