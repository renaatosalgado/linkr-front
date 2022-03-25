import { useState, useEffect } from "react";
import ReactTooltip from 'react-tooltip';
import { HeartIcon, HeartIconSelect, LikeHeartWrapper, LikeText } from "./style";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function LikeHeart({ like, setLike, postId }) {
  const { auth } = useAuth();
  const [refresh, setRefresh] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);
  const [nameTooltip, setNameTooltip] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    api.totalLikes(postId, auth?.token)
      .then(({ data }) => {
        setTotalLikes(data);
        if (data === 0) setDisabled(true);
        else setDisabled(false);
      })

    api.getTwoNames(postId, auth?.token)
      .then(({ data }) => {
        mountNamesForTheTooltip(data);
      })

    api.checkLikeUser(postId, auth?.token)
      .then(({ data }) => {
        setLike(data);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId, auth?.token, refresh, setLike]);

  async function handleLike() {
    await api.toggleLike({ like, postId }, auth?.token);
    setLike(!like);
    setRefresh(!refresh);
  }

  function mountNamesForTheTooltip(data) {
    const { userLiked, likes } = data[data.length - 1];
    data.pop();

    let textTooltip = '';

    const LOGGED_USER_LIKED = userLiked === true;
    const TOTAL = likes.total - 2;
    const CHECK_PLURAL = TOTAL > 1 ? '' : 's';

    if (data.length > 1) {
      LOGGED_USER_LIKED
        ? textTooltip += `Você, ${data[0].name}`
        : textTooltip += `${data[0].name}, ${data[1].name}`;

      TOTAL > 0
        ? textTooltip += ` e outra${CHECK_PLURAL} ${TOTAL} pessoa${CHECK_PLURAL}`
        : textTooltip += ` curtiu`;

    } else if (data.length === 1) {
      LOGGED_USER_LIKED
        ? textTooltip += `Você e ${data[0].name}`
        : textTooltip += `${data[0].name}`;

      textTooltip += ` curtiu`;

    } else {
      LOGGED_USER_LIKED && (textTooltip += `Você curtiu`);
    }

    setNameTooltip(textTooltip);
  }

  return (
    <LikeHeartWrapper>
      {like ? (<HeartIconSelect size="26" onClick={handleLike} />) : (<HeartIcon size="26" onClick={handleLike} />)}
      <LikeText data-tip={nameTooltip} data-type="light" data-place="bottom" data-tip-disable={disabled}>{totalLikes}{totalLikes > 1 ? ' likes' : ' like'}</LikeText>
      <ReactTooltip />
    </LikeHeartWrapper>
  )
}