import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import "./Main.css";

export const Main = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="MainBody">
      <div className="clock">
        <span className="clockcenter">{time.toLocaleTimeString()}</span>
      </div>
      <Link to="/Info" style={{ textDecoration: "none" }}>
        <div className="mainwarningposition">
          <div className="mainwartext">
          <img src="/img/mainnotice.png" className="mainwarning"></img>
          <span className="mainnotice">Notice</span>
          </div>
        </div>
      </Link>
      <div className="textcenter">
        <span className="boom">Boom</span>
        <span className="erang">erang</span>
        <img className="boomerang_logo" src="/img/boomerang_logo.png"></img>
        <span className="use">Choose Your</span>
        <span className="service">Using Service</span>
      </div>
      <div className="container">
        <Link to="/mac/5c:cf:7f:d1:a1:47:" style={{ textDecoration: "none" }}>
          <div className="box">
            <img src="/img/Cam.png" className="img"></img>
            <p className="text">음식 인식</p>
          </div>
        </Link>

        <Link to="/Ref" style={{ textDecoration: "none" }}>
          <div className="box">
            <img src="/img/Ref.png" className="img"></img>
            <p className="text">냉장고 현황</p>
          </div>
        </Link>

        <Link to="/Weathermenu" style={{ textDecoration: "none" }}>
          <div className="box">
            <img src="/img/Wea.png" className="img"></img>
            <p className="text">날씨</p>
          </div>
        </Link>  
      </div>
      <footer>
        {/* <div className="doc"></div>
        <div className="footer"> 이용할 서비스를 선택해 주십시오</div> */}
      </footer>
    </div>
  );
};
