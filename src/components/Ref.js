import axios from "axios";
import { useEffect, useState } from "react";
import { Amount } from "./Amount";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./Ref.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Ref = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/importHistory/5c:cf:7f:d1:a1:47:")
      .then(({ data }) => {
        setList(data);
        console.log(data);
      });
  }, []);

  const add = () => {
    let sum = 0;
    list.map((food) => (sum += food.carbon));
    return sum;
  };

  const alldelete = () => {
    axios.post("http://localhost:8000/alldelete");
    setList([]);
  };

  const item = list.map((food, idx) => {
    return (
      <>
        <div key={idx} className="carbon-container">
          <div className="imgbox carbon-element">
            <img className="REFimg" src={food.jpg}></img>
          </div>
          <div className="foodbox carbon-element">
            <span className="food">{food.name}</span>
          </div>
          <div className="carbonbox carbon-element">
            <span className="carbon">{food.carbon}g</span>
          </div>
          <D carbon={food.carbon} className="carbon-element"></D>
        </div>
        <div className="firstline"></div>
      </>
    );
  });

  return (
    <div>
      <div className="반응형"></div>
      <div style={{ position: "relative" }}>
        <div className="backref">
          <Link to="/">
            <div>
              <img className="backimg" src="/img/Vector5.png"></img>
            </div>
          </Link>
        </div>
        <h1 className="제목">부메랑 인벤토리</h1>
      </div>
      <div className="firstline"></div>
      <div className="carbon-container">
        <p className="제품사진 carbon-element">제품사진</p>
        <p className="품명 carbon-element">품명</p>
        <p className="탄소량 carbon-element">탄소량</p>
        <p className="탄소컬러 carbon-element">탄소컬러</p>
      </div>
      <div className="firstline"></div>
      {!list.length ? (
        <div className="EmptyCenter">
        <div className="EmptyBody">
          <div className="emptyposition">
            <img src="/img/empty.png" className="emptyimg"></img>
          </div>
          <span className="emptytext">냉장고가 텅 비어 있어요</span>
        </div>
        </div>
      ) : (
        <div>{item}</div>
      )}
      <div className="footerbox">
        <div className="deletebox" onClick={alldelete}>
          삭&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제
        </div>
        <div className="totalbox2">
          <span>탄소량 총합 : </span>
          <span>{add()}g</span>
        </div>
      </div>
    </div>
  );
};

const D = styled.div`
  width: 5vw;
  height: 5vw;
  margin: 0 auto;
  background-color: ${({ carbon }) => {
    if (carbon >= 180) return "rgba(255, 0, 0, 0.8)";
    else if (carbon >= 160) return "black";
    else return "blue";
  }};
  border-radius: 10px;
`;

const GrayLine = styled.hr`
  width: 100%;
  height: 40px;
  background-color: grey;
`;
