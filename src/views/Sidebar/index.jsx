import react from 'react'
import './style.css'
function Sidebar() {
  return (
    <>
      <aside className='sidebar'>
        <h2>Filters</h2>
        <ul>
          <li>On-going</li>
          <li>Solved</li>
          <li>All-bugs</li>
        </ul>
      </aside>
    </>
  )
}
export default Sidebar;