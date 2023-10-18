import React from 'react';
//components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    <div className="bg-black">
        <Header></Header>
        <Main></Main>
        <div className="container p-0 mt-3 bottom">
          <div className="bg-pink rounded-all pb-2"></div>
        </div>
{/*         <Footer></Footer> */}
    </div>
    </>
  )
}
