import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Amount } from "./Amount";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./Ref.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Info } from "./Info";
import { math } from "@tensorflow/tfjs";

export const Ref = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://boomerang-server.herokuapp.com/importHistory/5c:cf:7f:d1:a1:47:")
      .then(({ data }) => {
        setList(data);
        console.log(data, "DDDDD");
      });
  }, []);

  const add = () => {
    let sum = 0;
    list.map((food) => (sum += food.carbon * food.amount));
    return sum;
  };

  const amountadd = () => {
    let amountplus = 0;
    list.map((food) => (amountplus += food.amount));
    return amountplus;
  };

  const addcalorie = () => {
    let totalcalorie = 0;
    list.map((food) => (totalcalorie += food.calorie * food.amount));
    return totalcalorie;
  };


  const addtree = () => {
    let totaltree = 0;
    list.map((food) => (totaltree += (food.amount * food.carbon) / 6500));
    return totaltree.toFixed(2);
  };

  const alldelete = async () => {
    await axios.post("https://boomerang-server.herokuapp.com/alldelete");
    setList([]);
  };

  const updateDBAmount = (objectId, amount) => {
    axios.post("https://boomerang-server.herokuapp.com/updateAmount", {
      machineId: "5c:cf:7f:d1:a1:47:",
      amount,
      objectId,
    });
  };

  const updateList = (objectId, amount) => {
    const selFood = list.find((d) => d.objectId === objectId);
    selFood.amount = amount;
    if (amount === 0) {
      setList([...list.filter((d) => d.objectId !== objectId)]);
    } else {
      setList([...list]);
    }
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
            <span className="carbon">{food.amount * food.carbon}g</span>
          </div>
          <div className="kaloriebox carbon-element">
            <span className="kalorie">{food.calorie * food.amount}Kcal</span>
          </div>
          <div className="carbon-element">
            <div className="carbon-element">
              <div className="treecenter">
                <img className="tree" src="/img/tree.png"></img>
                <span className="treetext">
                  {((food.amount * food.carbon) / 6500).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
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
        <div className="firstlinecenter">
        <div className="firstline"></div>
        </div>
      </>
    );
  });

  return (
    <div className="refbody">
      {/* <Link to="/Info">
        <div className="warningpositionInInfo">
          <img src="/img/warning.png" className="warning"></img>
        </div>
      </Link> */}
      {/* <div className="?????????"></div> */}
      <div style={{ position: "relative" }}>
        <div className="backref">
          <Link to="/">
            <div>
              <img className="backimg" src="/img/Vector5.png"></img>
            </div>
          </Link>
        </div>
        <h1 className="??????">Boom List</h1>
        <h1 className="???????????????">Boomerang List</h1>
        <span className="referang">erang</span>
        <img className="ref_logo" src="/img/boomerang_logo.png"></img>
      </div>
      <div className="firstlinecenter">
      <div className="firstline"></div>
      </div>
      <div className="carbon-container">
        <p className="???????????? carbon-element">????????????</p>
        <p className="?????? carbon-element">??????</p>
        <p className="????????? carbon-element">?????????</p>
        <p className="????????? carbon-element">?????????</p>
        <p className="???????????? carbon-element">??????</p>
        <p className="?????? carbon-element">??????</p>
      </div>
      <div className="firstlinecenter">
      <div className="firstline"></div>
      </div>
      {!list.length ? (
        <div className="EmptyCenter">
          <div className="EmptyBody">
            <div className="emptyposition">
              <img src="/img/boomerangloading.gif" className="emptyimg"></img>
            </div>
            {/* <span className="emptytext">???????????? ??? ?????? ?????????</span> */}
          </div>
        </div>
      ) : (
        <div>{item}</div>
      )}
      <div className="footerboxcenter">
        <div className="footerbox">
          <div className="footergroup">
            <div className="footerboxtext">
              <span className="footernav">??? ?????????</span>
              <span className="footernav">??? ?????????</span>
              <span className="footernav">?????? ???</span>
              <span className="footernav">??????</span>
              <span className="footernav">????????????</span>
            </div>
            <div className="foooterboxnav">
              <span className="footer-element">{add()}g</span>
              <span className="footer-element">{addcalorie()}kcal</span>
              <span className="footer-element">{addtree()} ??????</span>
              <span className="footer-element">{amountadd()}??? </span>
              <div className="deleteboxwidth">
                <div className="deletebox" onClick={alldelete}>
                  ??????
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foooterblock"></div>
    </div>
  );
};

const GrayLine = styled.hr`
  width: 100%;
  height: 40px;
  background-color: grey;
`;

