import React, { useState,useEffect } from "react";
import {TrendingBox,Title,Trend} from "./style";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Trending(){
    const { auth } = useAuth();
    const [hashtags, setHashtags] = useState([]);
    useEffect(() => {
        api.listTrending(auth?.token)
          .then((res) => {
            setHashtags(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [auth]);

    return (
        <TrendingBox>
            <Title>trending</Title>
            {hashtags.map((hashtag,index) =>(
            <Trend key={index} to={`/hashtag/${hashtag.name.replace("#","")}`}>{hashtag.name}</Trend>))}
        </TrendingBox>
    )

}