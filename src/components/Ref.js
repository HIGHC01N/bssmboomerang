import axios from 'axios';
import { useEffect, useState } from 'react';
import {Amount} from './Amount';
import './Ref.css';

import styled from 'styled-components';


export const Ref = () => {

    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/importHistory/5c:cf:7f:d1:a1:47:').then( ({data}) => {
            console.log(data);
            setList(prev => [...data]);
        })
    }, []);

    const item = list.map((food, idx) => {
        return <div key={idx} >
            <div className="imgbox"><img className="img" src={food.jpg}></img></div>
            <div className='foodbox'><span className='food'>{food.name}</span></div>
            <div className='carbonbox'><span className='carbon'>{food.carbon}g</span></div>
            <D carbon={food.carbon}>
            </D>
            <div className='line'></div>
            
        </div>
    })

    return(
        <div>
            <div className='반응형'></div>
            <h1 className='제목'>부메랑 인벤토리</h1>
            <div className='firstline'></div>
            <p className="제품사진">제품사진</p>
            <p className="품명">품명</p>
            <p className="탄소량">탄소량</p>
            <p className="탄소컬러">탄소컬러</p>
            <div className='firstline'></div>
            <div>
                {item}
            </div>
        </div>
    )
}


const D =  styled.div`
margin-left: 87.9%;
margin-top: -5.1%;
margin-bottom: 3%;
width: 4vw;
height: 4vw;
background-color: ${({carbon}) => {
    if(carbon>=180) return 'rgba(255, 0, 0, 0.8)'
    else if(carbon >=160) return 'black'
    else return 'blue';
}};
border-radius: 10px;
`