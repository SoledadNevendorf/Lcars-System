import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../../pages/context";

//components
import Modal from './Modal';
import FlipNumbers from './FlipNumbers';

const Header = () => {
    const {isModalOpen, setIsModalOpen, toggleModal, resetHome, handleNews} = useGlobalContext();

    return <>
    <header>
        <div className="container">
            <div className="row align-items-end">
                <div className="col-2 bg-lightPurple pt-4">
                        <h6 className='black text-end'>port access</h6>
                </div>
                <div className="col-10">
                    <h2 className='display-5 orange text-end'>Lcars / Home</h2>
                </div>
            </div>

            <div className="row mt-1 justify-content-between">
                <div className="col-2 pt-5 bg-lightBlue3 black text-end">
                    <h6>02-854598</h6>
                </div>
                <FlipNumbers></FlipNumbers>
                <div className="col-5 p-0">
                    <div className="d-grid gap-2 d-md-flex justify-content-end">
                        <button className="btn bg-lightBlue p-2" type="button" onClick={resetHome}><Link className="nav-link black" to='/' data-link-alt="Home">Home</Link></button>
                        <button className="btn bg-cream black p-2" type="button"><Link className="nav-link black" to='' data-link-alt="About" onClick={toggleModal}>About Me</Link></button>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-end mt-1">
                        <button className="btn bg-orange p-2" type="button"  onClick={handleNews}><Link className="nav-link black" to='' data-link-alt="">news</Link></button>
{/*                         <button className="btn bg-pink black p-2" type="button"><Link className="nav-link black" to='' data-link-alt="">Button</Link></button> */}
                    </div>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-6 pb-3 bg-pink rounded-top-left"></div>
                <div className="col-1"><div className="bg-cream pb-3"></div></div>
                <div className="col-4"><div className="bg-cream pb-1"></div></div>
                <div className="col-1 bg-orange pb-3 rounded-right"></div>
    </div>
        </div>
    </header>
    <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>

}

export default Header;