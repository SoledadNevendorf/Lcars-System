import React, {useEffect} from "react";

const Modal = ({ modalContent, closeModal }) =>{
    useEffect(()=>{
        setTimeout(()=>{
            closeModal();
        },3000);
    })
    
    return (
        <div className="bg-lightPurple rounded-right py-1 black text-center">
            <p>{modalContent}</p>
        </div>

    )
}

export default Modal;