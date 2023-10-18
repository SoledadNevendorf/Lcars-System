import React, { useState, useEffect } from 'react';
import List from './list';
import Alert from './alert';


const getLocalStorage = () => {
    let list = localStorage.getItem('list');

    if(list){
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return []
    }
}

const TaskListApp = () => {
const [name, setName] = useState('');
const [list, setList] = useState(getLocalStorage());
const [isEditing, setIsEditing] = useState(false);

const [editID, setEditID] = useState(null);
const [alert, setAlert] = useState({show:false, msg:'', type:''});

const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
        //display alert
        showAlert(true, 'danger', 'Please enter value.')
    } else if(name && isEditing){
        //deal with edit
        setList(
            list.map((item)=>{
            //if id matches...
            if(item.id === editID){
                return{...item, title:name}
            }
            return item;
        }))
        setName('');
        setEditID(null);
        setIsEditing(false);
        showAlert(true,'success', 'value changed')
    } else{
        showAlert(true, 'success', 'item added to the list')
        const newItem = {id: new Date().getTime().toString(), title:name};
        setList([...list, newItem]);
        setName('');
    }
}

const showAlert = (show=false, type='', msg='') => {
    setAlert({show,type,msg})
};

const clearList = () =>{
    showAlert(true, 'danger', 'empty list')
    setList([]);
};

const removeItem = (id) =>{
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item)=> item.id !== id))
};

const editItem = (id) =>{
    const specificItem = list.find((item)=> item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
}

useEffect(()=>{
localStorage.setItem('list', JSON.stringify(list));
},[list])

return (
    <div className='mt-2'>
            <h3 className='text-uppercase text-end px-2 bg-pink black rounded-all'>Engineering Tasks</h3>
            <p className='text-center mt-5'>Add here your current task for the C. Engineer to follow.</p>
    <form className='form my-4' action="" onSubmit={handleSubmit}>
        {alert.show  && <Alert {...alert} removeAlert ={showAlert} list={list}/>}

        <div className="form-control text-center">
            <input className=' submit px-1 white border-bottom' type="text" placeholder='Report to Chief Engineer' value={name} onChange={(e) => setName(e.target.value)}/>
            <button type='submit' className='submit-btn bg-lightPurple rounded-right'>
                {isEditing? 'edit': 'submit'}
            </button>
        </div>
    </form>
    {list.length > 0 && (
    <div className="container">
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <div className="text-end">
                 <button className='clear-btn bg-lightYellow rounded-left mt-3' onClick={clearList}>clear all</button>   
        </div>

    </div>
    
    )}

    </div>
)

}

export default TaskListApp;