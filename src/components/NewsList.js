import {useState, useEffect} from "react";
import styled from "styled-components";
import NewsItem from './NewsItem'
import axios from 'axios';
import usePromise from "../lib/UsePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width:768px;
  margin:2rem auto 0;
  @media (max-width:768px) {
    width:100%; padding:0 1rem;
  }
`;
// https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d8a022991e154113879bac1bfaee3897
const NewsList = ({category}) => {

    const [loading, response, error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d8a022991e154113879bac1bfaee3897`,
        );
    },[category])

    if(loading){
        return <NewsListBlock>로딩 중...</NewsListBlock>
    }

    if (!response) {
        return null;
    }

    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    const {articles} = response.data;

    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;






