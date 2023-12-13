import Navbar from "../NavBar";
import './style.css'

export function Dashboard(){
    return(
        <div className="main">
            <div><h1>Bug Buster</h1></div>
            <div><Navbar /></div>            
        </div>
    )
}