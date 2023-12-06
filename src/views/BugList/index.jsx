import react from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './style.css';

function BugList() {
  return (
    <div className="main">
        <div className="nav"><Navbar/></div>
        <div className="body-wrap">
          <div className="sidebar"><Sidebar/></div>
          <div className="buglist">
            <div className="buglist-top">
              <h2>Bug List</h2>
              <button className='addbtn'>Add Bug</button>
            </div>
            <table className='table-main'>
              <tr>
                <th className='thead'>Project_Id</th>
                <th className='thead'>Name</th>
                <th className='thead'>Status</th>
                <th className='thead'>Description</th>
                <th className='thead'>Remarks</th>
              </tr>
              <tr className='trow'> 
                <td>blank</td>
                <td>blank</td>
                <td>blank</td>
                <td>blank</td>
                <td>blank</td>
              </tr>
              <tr className='trow'>
                <td>blank</td>
                <td>blank</td>
                <td>blank</td>
                <td>blank</td>
                <td>blank</td>
              </tr> 
              <tr className='trow'>
                <td>blank</td>
                <td>blank</td>
                <td>blank</td>
                <td>blank</td>
                <td>blank</td>
              </tr> 
              

            </table>
          </div>

        </div>
    </div>
  )
}
export default BugList;