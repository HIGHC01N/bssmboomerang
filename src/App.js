import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CheckFood } from './components/CheckFood';


function App() {

  return (
    <div className="App">
              <BrowserRouter>
                <Routes>
                  <Route path="/:macAddress" element={<CheckFood />}></Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
