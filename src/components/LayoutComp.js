import React from 'react'
import Navigation from '../components/Navigation';
import FooterComp from '../components/FooterComp';
import {Outlet} from "react-router-dom";
export default function LayoutComp() {
  return (

    <div className="App ">
      <header className="App-header">
          <nav >
      <Navigation/>
          </nav>
      </header>
      <main >
       <Outlet/>
      </main>
      <footer>
       <FooterComp/>
      </footer>
    </div>
   
  )
}
