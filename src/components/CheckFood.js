import axios from 'axios';
import { checkPropTypes } from 'prop-types';
import {useEffect, useState} from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './CheckFood.css';
import { Link } from "react-router-dom"


export function CheckFood() {
  const [data, setdata] = useState({});
  const { macAddress } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    const countdown = setInterval(() => {
      axios.get(`http://localhost:8000/importFood/${macAddress}`).then(({data}) => {
      setdata(prev => {
        return data;
      });
    })
    console.log("전송");
    }, 1000);
    return () => clearInterval(countdown);
  },[data]);
  
  return (
    <div className="App">
      {/* <meta http-equiv={refresh.isRefresh ? "refresh" : "none"} content="0.7"></meta> */}
        {data.objectId ? <div>
            <div>
      <img src={data.jpg} ></img>
      <h1>{data.name} 이(가) 인식되었습니다</h1>
      </div>
      <h3>칼로리 : {data.calorie}Kcal</h3>
      <h3>탄소 배출량 : {data.carbon}g</h3>
        </div> : <div>
        <img src="/img/Vector2.png" className="arrow"></img>
        <div className='start'>시작하기</div>
            <p className='intro'>위 카메라에 물체를 인식시켜주세요.</p>
            
            <div className='market' onClick={() => {
              navigate('/Ref');
            }}>
            <img src="/img/Vector3.png" className="marketimg"></img>
            </div>
            
            </div>}
    </div>
  );
}



