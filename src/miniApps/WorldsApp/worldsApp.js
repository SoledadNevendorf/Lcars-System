import { useEffect, useState } from "react";
import Worlds from './worlds';

const url = 'https://soledadnevendorf.github.io/STAPIbySolNevendorf/stWorlds.json';

function WorldsApp() {
    const [loading, setLoading] = useState(false);
    const [worlds, setWorlds] = useState([]);

    const removeWorld = (id) => {
        const newWorlds = worlds.filter((world) => world.id !== id);
        setWorlds(newWorlds);
    }

    const fetchWorlds = async() => {
        setLoading(true);
        try{
            const response = await fetch(url);
            const worlds = await response.json();
            console.log(worlds);
            setLoading(false);
            setWorlds(worlds);
        } catch(error){
            setLoading(false);
            console.log(error);
        }


    }

    useEffect(()=>{
        fetchWorlds();
    },[]);

    if (loading){
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        )
    }
    if(worlds.length === 0){
        return <div className="">
            <div className="title text-center mt-2">
            {<h3 className='bg-pink mt-2 black text-uppercase px-3 text-end rounded-all'>{worlds.length === 1 ? '1 world' : `${worlds.length} worlds`}</h3>}
                <h3 className="orange text-uppercase mt-3">You have visited all worlds in our current mission.</h3>
                <button className="rounded-all bg-pink text-uppercase text-center px-5 py-1 mt-5" onClick={fetchWorlds}>refresh</button>
            </div>
        </div>
    }

 return <>
    <Worlds worlds={worlds} 
    removeWorld={removeWorld}/>
 </>   
}

export default WorldsApp;