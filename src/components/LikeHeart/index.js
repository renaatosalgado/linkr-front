import { HeartIcon, HeartIconSelect, LikeHeartWrapper, LikeText } from "./style";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function LikeHeart({ like, setLike }) {
  const { auth } = useAuth();

  async function handleLike() {
    //passar id do post tbm pro back
    const { data } = await api.toogleLike({ like }, auth?.token);
    console.log(data);
    setLike(!like)
  }

  return (
    <LikeHeartWrapper>
      {like ? (<HeartIconSelect size="26" onClick={handleLike} />) : (<HeartIcon size="26" onClick={handleLike} />)}
      <LikeText>13 likes</LikeText>
    </LikeHeartWrapper>
  )
}