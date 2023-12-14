import react from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Button from '../Button';
import BugList from '../BugList';
import { Dashboard } from '../Dashboard';

function Navbar() {
  return (
    <>
    <div className="topic">
      <div><h1>Bug Buster</h1></div>
      <div className="navbar">
        <div>
          <ul className='links'>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/Buglist">Buglist</Link></li>
          </ul>
        </div>
        <div className="user">
          <i className="fa-solid fa-user"></i>
          &nbsp;&nbsp; Phalano
        </div>
      </div>
    </div>
    </>
  )
}
export default Navbar;