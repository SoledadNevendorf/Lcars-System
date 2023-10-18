import React from 'react'

export default function news() {
  return (
    <div className='container'>
        <h2 className='mt-2 lightPurple'>Captain's Log, Stardate 47725.4</h2>
        {/* misc */}
        <div className="row mt-2">
            <div className="col-3">
            <div className=" bg-lightPurple pb-2"></div>
            </div>
            <div className="col-9 bg-lightBlue2 pb-2 rounded-top-right"></div>
        </div>

        {/* main */}
        <div className="row mt-1">
            <div className="col-10">
                <div className="">
                <h5 className="lightPurple">Ahoy there, fellow spacefarers!</h5>
                <p className='white mt-2'>In this stellar section, we're boldly going where no one has gone before, adding new projects to our cosmic journey.</p>
                <p className='white mt-2'>Just like Captain Picard charting new galaxies, we're about to explore uncharted territories in our projects. </p>
                <p className='white mt-2'>Energize! </p>
                </div>
            </div>
            <div className="col-2 bg-lightBlue2"></div>
        </div>    
        <div className="row mt-3">
            <div className="col-10">
                <ul className='nav d-flex flex-column white'>
                    <li className='d-flex'>
                        <div className="bg-orange rounded-left p-2 me-1">
                        </div>
                        <div className=""><h5>Another Game</h5></div>
                        <div className="bg-orange rounded-right py-2 px-5 ms-1">
                        </div>
                    </li>
                    <p>An NFT game landing page. Check it out <a target='_blank' href="https://soledadnevendorf.github.io/AnotherGame/">Here</a>.</p>
                    <li className='d-flex mt-3'>
                        <div className="bg-orange rounded-left p-2 me-1">
                        </div>
                        <div className=""><h5>HTML & Bootstrap Portfolio</h5></div>
                        <div className="bg-orange rounded-right py-2 px-5 ms-1">
                        </div>
                    </li>
                    <p>A personal page to show UX Design and illustration projects. Check it out <a target='_blank' href="https://soledadnevendorf.github.io/portfolio/pages/deli_gateau.html">Here</a>.</p>
                    <li className='d-flex mt-3'>
                        <div className="bg-orange rounded-left p-2 me-1">
                        </div>
                        <div className=""><h5>Deli Gateau</h5></div>
                        <div className="bg-orange rounded-right py-2 px-5 ms-1">
                        </div>
                    </li>
                    <p>Landing page for a small bakery business. Check it out <a target='_blank' href="https://soledadnevendorf.github.io/deligateau/">Here</a>.</p>
                </ul>
            </div>
            <div className="col-2 bg-lightBlue2"></div>
        </div> 
    </div>
  )
}
