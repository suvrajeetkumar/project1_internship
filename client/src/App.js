import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import {BrowserRouter,Route,Routes,Switch,useHistory} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path = "/" element = {<h1>Home</h1>}/>
      <Route path = "/page1" element = {<Page1/>}/>
      <Route path = "/page2" element = {<Page2/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
 
export default App;
