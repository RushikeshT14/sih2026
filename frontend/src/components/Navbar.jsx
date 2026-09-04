import React from "react"
import "./Navbar.css"
import { House } from 'lucide-react';


const Navbar= ()=>{

    return(
        <>
        <div className="nav_con">
            <ul>
                <li><button><House /></button></li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
        </>
    )
}


export default Navbar