import React from 'react';
//import { BrowserRouter as Routes ,Route,Router } from 'react-router-dom';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import styled from "styled-components";

import Home from './pages/Home';
import Overview from './pages/Overview';
import Discussion from './pages/Discussion';
import KnownReferences from './pages/KnownReferences';
import LegalTerms from './pages/LegalTerms';
import Contact from './pages/Contact';

function App() {
  return (
    
    <div class="containerr">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/overview' element={<Overview/>}/>
            <Route path='/discussions' element={<Discussion/>}/>
            <Route path='/references' element={<KnownReferences/>}/>
            <Route path='/terms' element={<LegalTerms/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </Router>
     
    </div>
    
  );
}

export default App;
