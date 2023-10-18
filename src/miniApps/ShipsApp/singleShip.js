import React from 'react';
import Loading from './loading';
import { useParams, Link } from 'react-router-dom';
import Header from '../../pages/components/Header';

const url = 'https://soledadnevendorf.github.io/STAPIbySolNevendorf/stTech.json';

const SingleShip = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);
  const [ships, setShips] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);

    async function getShip() {
      try {
        const response = await fetch(url);
        const dataShip = await response.json();

        const selectedShip = dataShip.spacecrafts.find((ship) => ship.spaceCraftID === parseInt(id));

        if (selectedShip) {setShips(selectedShip);
        } else {
          setShips(null);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getShip();
  }, [id]); // Add id as a dependency

  if (loading) {
    return <Loading />;
  }
  if (!ships) {
    return (
      <div id='singleShip'>
        <div className='container'>
          <h2 className='white'> No ships to display.</h2>
        </div>
      </div>
    );
  }

  const { spaceCraftID, name, image, registry, status, dateStatus, spacecraftClass, owner } = ships;

  return (
    <div id='singleShip'>
      <Header />
      <div className='container'>
        <h2 className='my-2 oswald orange text-uppercase text-center'>{name}</h2>
        <div className="bg-orange pb-2 rounded-all"></div>

        <div className='row card-gradient card-border p-3'>
          <div className='col-4'>
            <img className='img-fluid' src={image} alt={name} />
          </div>
          <div className='col white'>
            <h3 className='oswald orange text-uppercase'>{name}</h3>
            <h4 className='lead white text-uppercase inner-letter'>{registry}</h4>
            <p className='py-1'>Status: {status}</p>
            <p className='py-1'>Date Status: {dateStatus}</p>
            <p className='py-1'>Spacecraft Class: {spacecraftClass}</p>
            <p className='py-1'>Owner: {owner}</p>
            {/* Other ship details here */}
            <Link className='btn bg-lightBlue3 rounded-bottom-right py-1 px-3 oswald text-uppercase' to={'/'}>
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShip;
