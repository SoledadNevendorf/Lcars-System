import React, { useState } from 'react';
import { useGlobalContext } from "../context";
//bootstrap
import Accordion from 'react-bootstrap/Accordion';

//mini apps
import DefaultApp from '../DefaultApp';
import BirthdayApp from '../../miniApps/BirthDayApp/birthdayApp';
import WorldsApp from '../../miniApps/WorldsApp/worldsApp';
import TaskListApp from '../../miniApps/TaskListApp/taskListApp';
import SuggestionBoxApp from '../../miniApps/SuggestionBoxApp/SuggestionBoxApp';
import ShipsListApp from '../../miniApps/ShipsApp/ShipsListApp';

import News from './news';

/* 
import DefaultApp from '../pages/defaultApp';
import AppConstruction from './components/appConstruction'; */

const Main = () => {
    const {activeApp, setActiveApp} = useGlobalContext();

    const asideMenu = [
        { label: 'Tripulation', index: 0, list: ['BirthdayApp', 'WorldsApp'] },
        { label: 'Ships', index: 1, list: ['Enterprise', 'Voyager'] },
    ];

    const tripulationList = [
        { label: 'BirthdayApp', key: 'birthdayApp', component: 'BirthdayApp' },
        { label: 'WorldsApp', key: 'worldsApp', component: 'WorldsApp' },
        { label: 'TaskListApp', key:'taskListApp', component: 'TaskListApp'},
        { label: 'SuggestionBox App', key:'suggestionBoxApp', component: 'suggestionBoxApp'}
    ];

    const shipsList = [
        { label: 'ShipsListApp', key: 'ShipsListApp', component:'ShipsListApp' },
    ];

    const handleListClick = (component) => {
        setActiveApp(component);
    };

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-2 p-0">
                        <Accordion className='mt-2'>
                            {asideMenu.map((item) => (
                                <Accordion.Item key={item.index} eventKey={item.index} className='mb-1 '>
                                    <Accordion.Header>{item.label}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="nav flex-column">
                                            {item.label === 'Tripulation'
                                                ? tripulationList.map((listItem) => (
                                                      <li key={listItem.key}  >
                                                          <button
                                                              onClick={() => handleListClick(listItem.component)}
                                                              className={activeApp === listItem.component ? 'active' : ''}
                                                          >
                                                              {listItem.label}
                                                          </button>
                                                      </li>
                                                  ))
                                                : item.label === 'Ships'
                                                ? shipsList.map((listItem) => (
                                                      <li key={listItem.key}>
                                                        <button onClick={() => handleListClick(listItem.component)}
                                                              className={activeApp === listItem.component ? 'active' : ''}
                                                          >
                                                              {listItem.label}
                                                          </button>
                                                      </li>
                                                  ))
                                                : null}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                    <div className="col-10 pe-0 relativep">
                        <div id="defaultApp" style={{ display: activeApp === 'defaultApp' ? 'block' : 'none' }}>
                            <DefaultApp className='mt-3'></DefaultApp>
                        </div>
                        <div id="handleNews" style={{ display: activeApp === 'handleNews' ? 'block' : 'none' }}>
                            <News></News>
                        </div>
                        <div id="BirthdayApp"style={{ display: activeApp === 'BirthdayApp' ? 'block' : 'none' }}>
                            <BirthdayApp />
                        </div>
                        <div id="WorldsApp" style={{ display: activeApp === 'WorldsApp' ? 'block' : 'none' }}>
                            <WorldsApp/>
                        </div>
                        <div id="TaskListApp" style={{ display: activeApp === 'TaskListApp' ? 'block' : 'none' }}>
                            <TaskListApp/>
                        </div>
                        <div id="suggestionBoxApp" style={{ display: activeApp === 'suggestionBoxApp' ? 'block' : 'none' }}>
                            <SuggestionBoxApp/>
                        </div>
                        <div id="ShipsListApp" style={{ display: activeApp === 'ShipsListApp' ? 'block' : 'none' }}>
                        <ShipsListApp/>
                        </div>
                        <div id="AppConstruction" style={{ display: activeApp === 'AppConstruction' ? 'block' : 'none' }}>
{/*                             <AppConstruction/> */}
<h1 className='orange mb-2'>AppConstruction</h1>
<div className="white">
<p className='mb-2 lightBlue'>**We Apologize for the Temporary Unavailability**</p>
<p className='mb-1'>Dear Valued Crew Members,</p>
<p>We regret to inform you that a sectionis currently unavailable.</p>
<p>We understand the inconvenience this may cause, and we're working diligently to rectify the situation. Our engineering teams are addressing the issue, and we anticipate that the affected section will be back online as soon as possible. Rest assured, The Enterprise's mission-critical systems and your safety remain our top priorities, and we're taking all necessary measures to resolve this matter promptly.</p>
<p>We appreciate your understanding and patience. We will keep you updated on the progress, and please feel free to contact our support team if you require any assistance or have questions.</p>
<p className='my-2'>Sincerely,</p>
</div>

<p className='text-end lightPurple'> Captain Nevendorf</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
