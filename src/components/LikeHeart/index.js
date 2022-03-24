import { useState, useEffect } from "react";
import { HeartIcon, HeartIconSelect, LikeHeartWrapper, LikeText } from "./style";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function LikeHeart({ like, setLike, postId }) {
  const { auth } = useAuth();
  const [refresh, setRefresh] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);

  async function handleLike() {
    setLike(!like)
    await api.toggleLike({ like, postId }, auth?.token);
    setRefresh(!refresh);
  }

  useEffect(() => {
    api.totalLikes(postId, auth?.token)
    .then(({data}) => {
      setTotalLikes(data);
    })
  }, [postId, auth?.token, refresh]);

  useEffect(() => {
    api.checkLikeUser(postId, auth?.token)
    .then(({data}) => {
      setLike(data);
    })
  }, [postId, auth?.token, setLike]);

  return (
    <LikeHeartWrapper>
      {like ? (<HeartIconSelect size="26" onClick={handleLike} />) : (<HeartIcon size="26" onClick={handleLike} />)}
      <LikeText>{totalLikes}{totalLikes > 1 ? ' likes' : ' like'}</LikeText>
    </LikeHeartWrapper>
  )
}