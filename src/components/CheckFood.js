import axios from "axios";
import { checkPropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./CheckFood.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function CheckFood() {

  const [data, setdata] = useState({});
  const { macAddress } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    const countdown = setInterval(() => {
      axios
        .get(`https://boomerang-server.herokuapp.com/importFood/${macAddress}`)
        .then(({ data }) => {
          setdata((prev) => {
            return data;
          });
        });
      console.log("전송");
    }, 1000);
    return () => clearInterval(countdown);
  }, [data]);

  return (
    <div className="App">
      {/* <meta http-equiv={refresh.isRefresh ? "refresh" : "none"} content="0.7"></meta> */}
      <Link to="/Info">
        <div className="warningposition">
          <img src="/img/warning.png" className="warning"></img>
        </div>
      </Link>
      {data.objectId ? (
        <div className="jpgbox">
          <div>
            <div className="jpg">
              <img className="datajpg" src={data.jpg}></img>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span className="data">{data.name} </span>
                <span className="가">이(가)</span>
              </div>
              <span className="recognize">인식되었습니다</span>
            </div>
          </div>
          <div className="info">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="first">{data.name}</span>
              <span className="second">탄소량은</span>
            </div>

            <D carbon={data.carbon} className="carbong">
              {" "}
              {data.carbon}g<br />
            </D>
            <span className="calorie">
              칼로리는
              <br />
            </span>
            <span className="third">{data.calorie}Kcal</span>
          </div>
        </div>
      ) : (
        <div className="containerbox">
          <div
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            <img className="Checkback" src="/img/Vector5.png"></img>
          </div>
          <img src="/img/Vector2.png" className="arrow"></img>
          <div className="start">시작하기</div>
          <p className="intro">위 카메라에 물체를 인식시켜주세요.</p>

          <div
            className="market"
            onClick={() => {
              navigate("/Ref");
            }}
          >
            <img src="/img/Vector3.png" className="marketimg"></img>
          </div>
        </div>
      )}
    </div>
  );
}

const D = styled.span`
  color: ${({ carbon }) => {
    if (carbon >= 180) return "red";
    else if (carbon >= 160) return "blue";
    else return "green";
  }};
`;
