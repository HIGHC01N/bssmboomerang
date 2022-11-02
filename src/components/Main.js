import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
    <div>
      <div className="clock">
        <span className="clockcenter">{time.toLocaleTimeString()}</span>
      </div>
      <Link to="/Info" style={{ textDecoration: "none" }}>
        <div className="warningposition">
          <img src="/img/warning.png" className="warning"></img>
        </div>
      </Link>
      <div className="textcenter">
      <span className="boom">부메랑</span>
      <span className="use">냉장고 이용하기</span>
      </div>
      <div className="container">
        <Link to="/mac/5c:cf:7f:d1:a1:47:" style={{ textDecoration: "none" }}>
          <div className="box">
            <img src="/img/Group.png" className="img"></img>
            <p className="text">음식 인식</p>
          </div>
        </Link>

        <Link to="/Ref" style={{ textDecoration: "none" }}>
          <div className="box">
            <img src="/img/Vector.png" className="img"></img>
            <p className="text">냉장고 현황</p>
          </div>
        </Link>

        <Link to="/Weathermenu" style={{ textDecoration: "none" }}>
          <div className="box">
            <img src="/img/Vector4.png" className="img"></img>
            <p className="text">날씨</p>
          </div>
        </Link>
      </div>

      <footer>
        <div className="doc"></div>
        <div className="footer"> 이용할 서비스를 선택해 주십시요</div>
      </footer>
    </div>
  );
};
