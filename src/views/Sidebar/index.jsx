import React from 'react';
import './style.css';

function Sidebar({ filterPriority }) {
  const handlePriority = (e) => {
    const selectedPriority = e.target.value;
    filterPriority(selectedPriority);
  };

  return (
    <>
      <aside className='sidebar'>
        <h2>Filters</h2>
        <select id="Status" onChange={handlePriority}>
          <option value="">------</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </aside>
    </>
  );
}

export default Sidebar;
