import React from 'react'
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import Categories from '../components/Categories';
import EntryView from '../components/EntryView';
import FooterComp from '../components/FooterComp';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
  } from "react-router-dom";
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
