import React from 'react';
import { FaGithubSquare, FaLinkedinIn, FaBehanceSquare } from "react-icons/fa";

export default function Footer() {
  return (

        <footer className='container bottom'>
            <div className="row mt-5 mb-2">
                <div className="col-2 bg-lightPurple rounded-left text-end">
                    <h6 className='black mt-5'>Soledad Nevendorf</h6>
                </div>
                <div className="col-1">
                    <div className="bg-lightBlue2 pb-2"></div>
                </div>
                <div className="col-4">
                    <p className='bg-pink black rounded-all px-5'>Graphic/Web Designer & Illustrator</p>
                    <p className='bg-pink black rounded-all px-5 mt-1'>Barcelona, España</p>
                </div>
                <div className="col-5">
                    <ul className='nav d-flex flex-column'>
                        <li className='bg-orange black rounded-all ps-3 mb-1'><a className="bg-black orange px-1" target="_blank" href="https://www.linkedin.com/in/soledadnevendorfdg/"><FaLinkedinIn className='social-icon'/></a> Linkedin</li>

                        <li className='bg-orange black rounded-all ps-3 mb-1'><a className="bg-black orange px-1" target="_blank" href="https://github.com/SoledadNevendorf"><FaGithubSquare className='social-icon'/></a> Github</li>

                        <li className='bg-orange black rounded-all ps-3'><a className="bg-black orange px-1" target="_blank" href="https://www.behance.net/SoledadNevendorf"><FaBehanceSquare className='social-icon'/></a> Behance</li>
                    </ul>
                </div>
            </div>
        </footer>

  )
}
