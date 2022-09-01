import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CheckFood } from './components/CheckFood';
import { Main } from './components/Main';


function App() {

  return (
    <div className="App">
              <BrowserRouter>
                <Routes>
                  <Route exact path="/" element={<Main />}  />
                  <Route path="/:macAddress" element={<CheckFood />}></Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
