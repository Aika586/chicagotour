
import React from 'react';
import './Title.css';
import {Link} from 'react-router-dom'

export default function Title() {
    return (
        <div className="Title">
            <header>
            <h1>CHICAGOTOUR</h1> 
        
        <div className="Title-Subtitle">Chicago Places to Visit</div>

        <div>
            <Link className="nav-link" activeclassname=" nav-link-active" to={"/"}> List</Link>
            <Link className="nav-link" activeclassname=" nav-link-active" to={"/about"}> About</Link>
        </div>

    
        </header>
        </div>
    )
}

