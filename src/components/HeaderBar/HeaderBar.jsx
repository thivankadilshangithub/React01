import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function HeaderBar(){
    return(  
        <BrowserRouter>
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <span class="navbar-brand mb-0 h3 p-2" >Name List</span>
                <ul class="navbar-nav">
                <li class="nav-item">
                        <Link to={"/" }class="nav-link">Home </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"/about"} className="nav-link" >About </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"/namelist"} class="nav-link">Show Name List </Link>
                    </li>
                </ul>
            </nav>
  </BrowserRouter>
);
}

export default HeaderBar;