import React from "react";
import World from './world';

const Worlds = ({ worlds, removeWorld }) => {
  return (
    <>
      {<h3 className='bg-pink mt-2 black text-uppercase px-3 text-end rounded-all'>{worlds.length === 1 ? '1 world' : `${worlds.length} worlds`}</h3>}
      <div className="container py-2">
    <h5 className="orange">Explore with Purpose</h5>
 <p className="white"> Discover, record, and prioritize. <br /> Our internal app makes it easy for crew members to track the worlds they've visited and help the captain chart the course for our next adventure.</p> 
 </div>
 
        <div className="container mt-3">
          {worlds.map((world) => (
            <World key={world.id} {...world} removeWorld={removeWorld} />
          ))}
        </div>
    </>
  );
};

export default Worlds;


