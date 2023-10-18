import React, { useState, useContext, createContext, useEffect } from 'react';

// Create the context
const AppContext = createContext();

function AppProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeApp, setActiveApp] = useState('defaultApp');

  const toggleModal = () => {setIsModalOpen(!isModalOpen)};
  const resetHome = () => {setActiveApp('defaultApp')};
  const handleNews= () => {setActiveApp('handleNews')}

  /* ------------------------------------------------ */
  /* BIRTHDAY APP ------------------------------------*/
  /* ------------------------------------------------ */
  const urlCharacters = 'https://soledadnevendorf.github.io/STAPIbySolNevendorf/stCharacters.json';
  const [people, setPeople] = useState([]);
    useEffect(()=>{
      getPeople();
  },[]);

  const getPeople = async() =>{
    const response = await fetch(urlCharacters);
    const people = await response.json();
    const { nextGeneration } = people;

    setPeople(people);
}

useEffect(()=>{
  getPeople();
},[]);

const originalPeople = people;

/* ---------------------------------- */
/* SHIPS APP ------------------------ */
/* ---------------------------------- */

const urlTech = 'https://soledadnevendorf.github.io/STAPIbySolNevendorf/stTech.json';

const [loading, setLoading] = useState(true);
    
const [ships, SetShips] = useState([]);

const fetchShips = async () =>{
    setLoading(true)
    try{
        const response = await fetch(urlTech);
        const dataShips = await response.json();
        const { spacecrafts } = dataShips;
        
        if(spacecrafts){
            const newShips = spacecrafts.map((ship) =>{
                const { spaceCraftID, name, image, registry, status, dateStatus, spacecraftClass, owner } = ship;
                
                return{
                    id: spaceCraftID,
                    name: name,
                    image: image,
                    registry: registry,
                    status: status,
                    dateStatus: dateStatus,
                    spacecraftClass: spacecraftClass,
                    owner: owner
                }
            })
            SetShips(newShips);
        }else{
            SetShips([])
        }
        setLoading(false)
    }   catch(error){
        console.log(error)
        setLoading(false)
    }
}

useEffect(()=>{
    fetchShips()
},[])


  return (
    <AppContext.Provider value={{
      activeApp,
      setActiveApp,
      resetHome,
      handleNews,
      isModalOpen,
      setIsModalOpen,
      toggleModal,
      people,
      setPeople,
      originalPeople,
      loading,
      ships, 

     }}>
      {children}
    </AppContext.Provider>
  );
}

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
}


export {AppContext, AppProvider};
