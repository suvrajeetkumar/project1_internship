import React from 'react';
import './Navbar.css';
import {BrowserRouter,Route,Link,Switch,useHistory} from 'react-router-dom';
const Navbar = () => {
    return(
        <div>
            <div className="topnav">
            <span className='logo'></span>
             {/* <Link to="/" style={{"background" : "rgb(240 62 178)"}}>Home</Link> */}
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
            
            </div>

            
        </div>
        
    )
}

export default Navbar;