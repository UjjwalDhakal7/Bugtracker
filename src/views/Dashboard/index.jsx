import Navbar from "../NavBar";
import './style.css'

export function Dashboard(){
    return(
        <div className="content">
            <div className="nav"><Navbar /></div>  
            <div className="main">
                !! Yo ho Khali Dashboard !!
            </div>          
        </div>
    )
}