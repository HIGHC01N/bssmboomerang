import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Amount } from "./Amount";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./Ref.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Info } from "./Info";

export const Ref = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/importHistory/5c:cf:7f:d1:a1:47:")
      .then(({ data }) => {
        setList(data);
        console.log(data, "DDDDD");
      });
  }, []);

  const add = () => {
    let sum = 0;
    list.map((food) => (sum += food.carbon*food.amount));
    return sum;
  };

  const alldelete = () => {
    axios.post("http://localhost:8000/alldelete");
    setList([]);
  };

  const updateDBAmount = (objectId, amount) => {
    axios.post("http://localhost:8000/updateAmount", {
      machineId: "5c:cf:7f:d1:a1:47:",
      amount,
      objectId,
    });
  };

  const updateList = (objectId, amount) => {
    const selFood = list.find((d) => d.objectId === objectId);
    selFood.amount = amount;
    if (amount === 0) {
      setList(list.filter((d) => d.objectId !== objectId));
    }
    setList([...list]);
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
            <span className="carbon">{food.amount*food.carbon}g</span>
          </div>
          <D carbon={food.carbon} className="carbon-element"></D>
          <div className="amount carbon-element">
            <div className="count">
              <div
                className="minus"
                onClick={() => {
                  updateDBAmount(food.objectId, food.amount - 1);
                  updateList(food.objectId, food.amount - 1);
                }}
              >
                -
              </div>
              <span className="countnumber">{food.amount}</span>
              <div
                className="plus"
                onClick={() => {
                  updateDBAmount(food.objectId, food.amount + 1);
                  updateList(food.objectId, food.amount + 1);
                }}
              >
                +
              </div>
            </div>
          </div>
        </div>
        <div className="firstline"></div>
      </>
    );
  });

  return (
    <div>
      <Link to="/Info">
        <div className="warningpositionInInfo">
          <img src="/img/warning.png" className="warning"></img>
        </div>
      </Link>
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
        <p className="개수 carbon-element">개수</p>
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
          비&nbsp;&nbsp;&nbsp;우&nbsp;&nbsp;&nbsp;기
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
