
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export function CheckFood() {
  const [data, setdata] = useState({});
  const { macAddress } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/importFood/${macAddress}`).then(({data}) => {
      console.log(data);
      setdata(prev => data);
    })
  }, [])
  return (
    <div className="App">
      <div>
      <img src={data.jpg} ></img>
      <h1>{data.name}가 인식되었습니다</h1>
      </div>
      <h3>칼로리 : {data.calorie}Kcal</h3>
      <h3>탄소 배출량 : {data.carbon}g</h3>
      <meta http-equiv="refresh" content="2"></meta>

    </div>
  );
}


