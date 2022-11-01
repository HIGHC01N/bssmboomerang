import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckFood } from "./components/CheckFood";
import { Main } from "./components/Main";
import { Ref } from "./components/Ref";
import { Weathermenu } from "./components/Weathermenu";
import { Info } from "./components/Info"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/Ref" element={<Ref />} />
          <Route exact path="/Weathermenu" element={<Weathermenu />} />
          <Route exact path="/" element={<Main />} />
          <Route exact path="/Info" element={<Info />}/>
          <Route path="/:macAddress" element={<CheckFood />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
