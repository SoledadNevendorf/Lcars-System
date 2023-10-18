import React from 'react';
import { FaHandSpock, FaStar } from "react-icons/fa6";

export default function DefaultApp() {
  return (
<div className="container">
  <h2 className='mt-2 lightPurple'>Starfleet LCARS Simulator App</h2>
  <p className="lead white">Your Personal OS Companion for the Final Frontier!</p>

  <div className="row mt-2">
    <div className="col-3">
      <div className=" bg-lightPurple pb-2"></div>
    </div>
    <div className="col-9 bg-lightBlue2 pb-2 rounded-top-right"></div>
  </div>
  <div className="row mt-1">
    <div className="col-10">
<div className="">
  <h5 className="lightPurple"><span><FaHandSpock/></span> Engage with LCARS</h5>
  <p className='white mt-2'>Step into the shoes of a Starfleet officer with this incredible LCARS simulator. LCARS (or Library Computer Access/Retrieval System) is your operating system that will help you navigate your daily tasks, just like the brave crew members aboard the starships of the United Federation of Planets.</p>
</div>
    </div>
    <div className="col-2 bg-lightBlue2"></div>
  </div>
  <div className="row mt-1">
    <div className="col-10 mt-3">
    <h5 className="pink"><span><FaStar/></span> Showcasing React Skills</h5>
  <p className='white mt-2'>LCARS app isn't just a tribute to Star Trek; it's also a demonstration of my React skills. I've designed and developed this app to pay homage to the LCARS system while showcasing the latest in web development technology.</p>
    </div>
    <div className="col-2 bg-pink"></div>
  </div>
  <div className="row mt-1">
    <div className="col-2">
      <div className="bg-pink pb-2"></div>
    </div>
    <div className="col-10 bg-pink rounded-bottom-right"></div>
  </div>
</div>
  )
}
