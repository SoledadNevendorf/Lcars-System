import React, { useState, useReducer } from 'react';
import Modal from './suggestionModal';
import { reducer } from '../reducer';

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
};

const ListApp = () => {
        const [name, setName] = useState('');
        
        const [state, dispatch] = useReducer(reducer, defaultState);

        const handleSubmit = (e) => {
            e.preventDefault();
            if(name){
                const newItem = {id:new Date().getTime().toString(), name}
                dispatch({ type: 'ADD_ITEM', payload: newItem});
                setName('');
            }else{
                dispatch({type:'NO_VALUE'})
            }
        }

        const closeModal = () =>{
            dispatch({type: 'CLOSE_MODAL'});
        }

return(
        <div className="mt-2">
            {state.isModalOpen && <Modal closeModal={closeModal} modalContent = { state.modalContent } />}

            <h3 className='bg-pink mt-2 black text-uppercase px-3 text-end rounded-all'>Suggestion Box</h3>
            <p className='orange mt-5 text-center'>Attention, crew members!</p>
            <p className='white text-center'> All suggestions and recommendations shall be duly submitted to the Captain for consideration. <br /> In the spirit of unity and exploration, your input is invaluable as we navigate the vast cosmos.</p>
            {state.people.map((person)=>{
                return (
                    <div key={person.id} className='mb-2'>
                        <div className="row">
                            <div className="col-2">
                                <div className="bg-lightBlue2 pb-2"></div>
                            </div>
                            <div className="col-10 pb-2 bg-lightBlue rounded-top-right"></div>
                        </div>
                        <div className="row">
                            <div className="col-10"></div>
                            <div className="col-2 pb-2 bg-lightBlue"></div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-10 d-flex justify-content-between">
                                <p className='white inline-block'>{person.name}</p>
                                <div className="inline-block text-end">
                                    <button className='btn white border py-1 px-3' onClick={()=> dispatch({type:'REMOVE_ITEM', payload:person.id})}>remove</button></div>

                            </div>
                            <div className="col-2 pb-5 bg-pink">
                                <p className='text-end black m-auto'>{person.id}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <div className="pb-2 bg-pink"></div>
                            </div>
                            <div className="col-11 pb-2 bg-pink rounded-bottom-right"></div>
                        </div>
                    </div>
                )
            })}


            <form onSubmit={handleSubmit} className='form text-center'>
                <input className='white border-bottom' type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                <button type='submit' className='submit-btn bg-lightPurple rounded-right mt-2 ms-2'>Add</button>
            </form>
        </div>
    )

}

export default ListApp;