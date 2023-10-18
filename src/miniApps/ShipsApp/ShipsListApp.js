import React, { useState } from 'react';
import Ships from './ships';
import Loading from './loading';
import { useGlobalContext } from '../../pages/context';

/* icons */
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const ShipsList = () => {
  const { ships, loading} = useGlobalContext();
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  if (loading) {
    return <Loading />;
  }

  if (ships.length < 1) {
    return <h2 className='white text-center'>No ships matched your search criteria.</h2>;
  }

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const shipsToDisplay = ships.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(ships.length / itemsPerPage);
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className='overflow-hidden'>
    <h3 className='bg-pink mt-2 black text-uppercase px-3 text-end rounded-all'>Ships</h3>
      <div className='row d-flex justify-content-between'>
        {shipsToDisplay.map((ship) => {
          return <Ships key={ship.spaceCraftID} {...ship} />;
        })}
      </div>
      <div className='container justify-content-end'>
        <div className="d-flex">
            <button className='btn btn-pagination align-items-center px-3'  onClick={handlePrevPage} disabled={page === 1}>
            <FaAnglesLeft/>Previous
            </button>
            <button className='btn btn-pagination align-items-center px-3' onClick={handleNextPage} disabled={page * itemsPerPage >= ships.length}>
                Next <FaAnglesRight/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ShipsList;
