import React, { useState } from "react";
import {FaTimes, FaGithubSquare, FaLinkedinIn, FaBehanceSquare} from 'react-icons/fa';
import AboutMeImage from '../../assets/images/aboutme.png';

const Modal = ({ isModalOpen, toggleModal }) => {
    
return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal':'modal-overlay'}`}>
        <div className="modal-container">
            <div className='bg-orange text-end rounded-all m-2'>
                <button className="btn px-3 py-1" onClick={toggleModal}><FaTimes className="fa-icons"/></button>
            </div>
        </div>
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <img className="img-fluid" src={AboutMeImage} alt="Soledad Nevendorf" />
                </div>
                <div className="col">
                    <h2 className="display-5 bold lightBlue mb-3">Soledad Nevendorf</h2>
                    <div className="white">
                        <p className="mb-2">¡Hola! Soy diseñadora y desarrolladora front-end. Actualmente vivo y trabajo en Barcelona.</p>
                        <p className="mb-2">Hace algunos años leí un libro sobre tecnología que me voló la cabeza y quise darle un giro de 180° a mi carrera. Estudié diseño UX/UI y luego front-end. En 2021 logré llegar a mi primer trabajo en IT como desarrolladora desde casa. Esta experiencia me enseñó a manejar mis tiempos, establecer prioridades y trabajar con un equipo de forma remota.</p>
                        <p className="mb-2"> Me interesa la versatilidad en los proyectos, que la forma siga a la función y que el diseño cuente una historia. Desde el inicio de un proyecto busco investigar y analizar los objetivos, conocer el porqué para encontrar el cómo.</p>
                        <p>¡Espero que les guste mi trabajo!</p>  
                    </div>
                    <div className="social">
                        <ul className="nav mt-5">
                            <li className='me-5'><a className="social-link" target="_blank" href="https://www.linkedin.com/in/soledadnevendorfdg/"><FaLinkedinIn className='social-icon'/></a></li>
                            <li className='me-5'><a className="social-link" target="_blank" href="https://github.com/SoledadNevendorf"><FaGithubSquare className='social-icon'/></a></li>
                            <li className=''><a className="social-link" target="_blank" href="https://www.behance.net/SoledadNevendorf"><FaBehanceSquare className='social-icon'/></a></li>
                        </ul>
                    </div>
            
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal;