import React from "react";
import { Link } from 'react-router-dom';
import DataError from '../assets/images/dataError.png';

function Error() {
    return(<>
    <div id="ErrorPage" className="">
        <div className="container pt-5">
         <h1 className="display-3 bold mb-3 lightBlue3">Cordenates not found.</h1>
         <p className="lead mb-2">It appears that the wormhole you where looking for has collapsed, <br /> or the cordenates you indicated are off our quadrant.</p>
         <p>Scan for a new one.</p>
         <div className="data-error"><img src={DataError} alt="data-error" /></div>
        <footer className="bottom">
            <ul className="nav navbar d-flex">
                <li className="nav-item"><Link className="" data-link-alt="Home" to="/"><span>Back to Home</span></Link></li>
            </ul>  
        </footer>
        </div>
 
    </div>


        
    </>)
}

export default Error;