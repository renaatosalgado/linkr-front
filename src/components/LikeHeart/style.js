import styled from 'styled-components';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

const LikeHeartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const HeartIcon = styled(HiOutlineHeart)`
  color: #FFF;

  cursor: pointer;
`

const HeartIconSelect = styled(HiHeart)`
  color: #AC0000;

  cursor: pointer;
`

const LikeText = styled.span`
  font-size: 11px;
  color: #FFF;

  cursor: pointer;
`

export {
  HeartIcon,
  HeartIconSelect,
  LikeText,
  LikeHeartWrapper,
}