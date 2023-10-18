import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';

function List({items, removeItem, editItem}) {
    return(
<div className="">
    {items.map((item)=>{
        const {id, title} = item;
        return (
            <article key={id} className="mt-2 px-2">
                <div className="row divider">
                <div className="col"><p className="inline-item cream">{title}</p></div>
                <div className="col text-end">
                    <div className="btn-container">
                        <button type="button" className="white edit-btn px-2" onClick={()=>editItem(id)}><FaEdit/></button>
                        <button type="button" className="white edit-btn" onClick={()=> removeItem(id)}><FaTrash/></button>
                    </div>
                </div>
                </div>
            </article> 
        )

    })}
</div>
    )
}

export default List;