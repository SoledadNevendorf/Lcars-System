import React, { useState } from "react";

const World = ({id, Name, Class, Type, State, Satelite, Info, Image, removeWorld}) =>{

    const [readMore, setReadMore] = useState(false);

 return<>
 <article key={id} className="px-4 mb-1 border-bottom pt-1">
    <div className="row">
    <div className="col">
            <img className="img-fluid" src={Image} alt={Name} />
    </div>
    <div className="col mx-2">
        <div className="group">
            <p className="bg-lightBlue mb-2 black px-2 rounded-right">Name</p>
            <h4 className="orange">{Name}</h4> 
        </div>
        <div className="group row gx-1">
                 <div className="col pe-2 group">
            <p className="rounded-border mb-2 lightBlue rounded-right">Class</p>
            <h6 className="orange">{Class}</h6> 
        </div>
        <div className="col group pe-2">
            <p className="rounded-border mb-2 lightBlue rounded-right">Type</p>
            <h6 className="orange">{Type}</h6> 
        </div>
        <div className="col group pe-2">
            <p className="rounded-border mb-2 lightBlue rounded-right">Satelite</p>
            <h6 className="orange">{Satelite}</h6> 
        </div>   
        </div>


    </div>
    <div className="col mx-2">
        <p className="white"> {
        readMore ? Info : `${Info.substring(0,100)}...`} <button className="bg-lightBlue black px-2 rounded-all text-decoration-underline" onClick={()=>setReadMore(!readMore)}>
            {readMore?'show less': 'read more'}</button></p>
        <div className="h-05em bg-lightPurple rounded-right mb-2"></div>
        <h6 className="lightPurple">State: {State}</h6>
        <div className="">
            <button onClick={()=>removeWorld(id)} className=" text-end w-100 bg-lightPurple text-uppercase p-1 rounded-left">Visited</button> 
        </div>

    </div>
    </div>
 </article>
 </>
}

export default World;