import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
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
      {/* <img className="MainBody" src="/img/backgroundcolor.png"></img> */}
      <div className="clock">
        <span className="clockcenter">{time.toLocaleTimeString()}</span>
      </div>
      <div className="welcomebox">
        <span className="welcome">
        <Typewriter
            options={{
              strings: ["Welcome to", "환영합니다"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <span className="boomerangref">
        <Typewriter
            options={{
              strings: ["Boomerang refrigerator", "부메랑 냉장고"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
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
      <div className="maincenter">
      <div className="container">
        <Link to="/mac/5c:cf:7f:d1:a1:47:" style={{ textDecoration: "none" }}>
          <motion.div
            className="음식인식box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="/img/Cam.png" className="img"></img>
            <p className="text">음식 인식</p>
          </motion.div>
        </Link>

        <Link to="/Ref" style={{ textDecoration: "none" }}>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="/img/Ref.png" className="img"></img>
            <p className="text">냉장고 현황</p>
          </motion.div>
        </Link>

        <Link to="/Weathermenu" style={{ textDecoration: "none" }}>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="/img/Wea.png" className="img"></img>
            <p className="text">날씨</p>
          </motion.div>
        </Link>
      </div>
      </div>
      <footer>
        {/* <div className="doc"></div>
        <div className="footer"> 이용할 서비스를 선택해 주십시오</div> */}
      </footer>
    </div>
  );
};
