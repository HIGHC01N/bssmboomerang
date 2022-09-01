import axios from 'axios';
import { checkPropTypes } from 'prop-types';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Amount} from './Amount';
import './CheckFood.css';


export function CheckFood() {
  const [data, setdata] = useState({});
  const { macAddress } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/importFood/${macAddress}`).then(({data}) => {
      setdata(prev => data);
    })
  }, [])
  return (
    <div className="App">
        <meta http-equiv="refresh" content="2"></meta>
        {data.objectId ? <div>
            <div>
      <img src={data.jpg} ></img>
      <h1>{data.name}가 인식되었습니다</h1>
      </div>
      <h3>칼로리 : {data.calorie}Kcal</h3>
      <h3>탄소 배출량 : {data.carbon}g</h3>
        </div> : <div>
        <img src="/img/Vector2.png" className="arrow"></img>
        <div className='start'>시작하기</div>
            <p className='intro'>위 카메라에 물체를 인식시켜주세요.</p>
            </div>}
            <Amount data={1} />
    </div>
  );
}



