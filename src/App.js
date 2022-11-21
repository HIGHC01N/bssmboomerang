import logo from "./logo.svg";
import "./App.css";
import "./components/Main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckFood } from "./components/CheckFood";
import { Main } from "./components/Main";
import { Ref } from "./components/Ref";
import { Weathermenu } from "./components/Weathermenu";
import { Info } from "./components/Info";
import { NotFound } from "./components/NotFound";
import { Camera } from "./components/Camera";
import { Guide } from "./components/Guide";
import { Service } from "./components/Service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="Service" element={<Service />} />
          <Route exact path="/Guide" element={<Guide />} />
          <Route exact path="/Ref" element={<Ref />} />
          <Route exact path="/Weathermenu" element={<Weathermenu />} />
          <Route exact path="/" element={<Main />} />
          <Route exact path="/Info" element={<Info />} />
          <Route exact path="/Camera" element={<Camera />} />
          <Route exact path="*" element={<NotFound />} />
          <Route path="/mac/:macAddress" element={<CheckFood />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
