import React, { useState } from 'react';
import data from './bd-data';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const BirthdayApp = () => {
    const [people, setPeople] = React.useState(data);
    const originalPeople = data;
  
    const removeItem = (id) => {
      let newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    };
  
    const buyGift = (id) => {
      setPeople((prevPeople) =>
        prevPeople.map((person) => {
          if (person.id === id) {
            return { ...person, message: 'Gift sent!' };
          }
          return person;
        })
      );
    };

    const resetPeople = () => {
      setPeople(originalPeople);
    };

    /* PAGINATION */
    const itemsPerPage = 6;
    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const CrewToDisplay = people.slice(startIndex, endIndex);

    const handlePrevPage = () => {
      if (page > 1) {
        setPage(page - 1);
      }
    };
  
    const handleNextPage = () => {
      const totalPages = Math.ceil(people.length / itemsPerPage);
      if (page < totalPages) {
        setPage(page + 1);
      }
    };
  
    return (
        <>
        {<h3 className='bg-pink mt-2 black text-uppercase px-3 text-end rounded-all'> {people.length === 1 ? '1 birthbirthdate' : `${people.length} birthbirthdates`}</h3>}
              <div className="row gx-2">
        {CrewToDisplay.map((person) => {
          const { id, name, image,rank, birthdate, message } = person;
  
          return (
            <div key={id} className="col-4">
                <div className="profile d-flex m-2">
                    <div className="col rounded-left bg-lightPurple h-1em"></div>
                    <div className="col-5"><h6 className="lightPurple pe-2 text-end">{name}</h6></div>
                    <div className="rounded-right bg-lightPurple h-1em px-1 py-2"></div>
                </div>

                <div className="row px-4">
                    <div className="col-4">
                        <div className="circular" style={{ backgroundImage: `url(${image})` }}></div>
                    </div>
                    <div className="col-8">
                        <div className="group row text-start">
                            <div className="col-4"><p className='d-inline orange'>Rank:</p></div>
                            <div className="col"><p className="d-inline lightPurple">{rank}</p></div>
                        </div>
                        <div className="group row text-start">
                            <div className="col-4"><p className='d-inline orange'>Birthdate:</p></div>
                            <div className="col"><p className="d-inline lightPurple">{birthdate}</p></div>
                        </div>
                        <div className="group row text-start">
                            <div className="col-4"><p className='d-inline orange'>Gift:</p></div>
                            <div className="col"><p className="d-inline lightPurple">{message}</p></div>
                        </div>                                            

                    </div>
                </div>
                <div className="rounded h-05em bg-lightBlue mx-2 mt-1"></div>
                <div className="text-end mt-2 mx-2">
                    <button className="bg-orange rounded-left py-1 px-3 me-2 text-uppercase bold" onClick={() => buyGift(id)}>Send Gift</button>
                    <button className="bg-orange rounded-left py-1 px-3 text-uppercase bold" onClick={() => removeItem(id)}>Remove</button>
                </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-between mt-1 border-top">
        <div className="col-3 text-start d-flex">
            <button className='btn btn-pagination align-items-center px-3'  onClick={handlePrevPage} disabled={page === 1}>
            <FaAnglesLeft/>Previous
            </button>
            <button className='btn btn-pagination next align-items-center px-3' onClick={handleNextPage} disabled={page * itemsPerPage >= people.length}>
              Next <FaAnglesRight/>
            </button>
        </div>
        <div className="col-3 text-end">
        <button className="bg-orange rounded-left py-1 px-3 text-uppercase bold mt-2 mx-2" onClick={() => setPeople([])}>
          Clear All
        </button>
        <button className="bg-lightBlue rounded-left py-1 px-3 text-uppercase bold mt-2" onClick={resetPeople}>
          Reset
        </button>
        </div>
        </div>

      </div>
        </>

    );
  };
  
  


export default BirthdayApp;