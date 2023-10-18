import React from 'react'
import { Link } from 'react-router-dom'

const Ship = ({ id, name, image, registry, status, dateStatus, spacecraftClass, owner }) => {
  return (
<article className='col-4 row card-gradient mb-2'>
  <div className="col p-2">
    <div className="img-container">
      <img className='img-fluid' src={image} alt={name} />
    </div>
  </div>
  <div className="col p-2">
    <div className="ships-footer white">
      <h5 className='oswald orange text-uppercase'>{name}</h5>
      <p className='mb-2'>{registry}</p>
      <p>{status}</p>
      <Link to={`/ship-list-app/${id}`} className='btn bg-lightBlue3 rounded-bottom-right py-1 px-3 oswald text-uppercase'>More</Link>
    </div>
  </div>
</article>
  )
}

export default Ship
