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
      <ul className='navbar'>
        <li><Link to ="/"><Button title="Home" className="btn"/></Link></li>
        <li><Link to ="/Buglist"><Button title="Buglist" className="btn" /></Link></li>
      </ul>
    </div>
    </>
  )
}
export default Navbar;