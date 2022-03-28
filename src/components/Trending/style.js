import styled from "styled-components";
import { Link } from "react-router-dom";

export const TrendingBox = styled.div`
    position: sticky;
    top: 100px;
    width: 301px;
    height: 406px;
    background: #171717;
    border-radius: 16px;
    margin: 110px 25px;
    color: #FFFFFF;
    font-weight: 700;
    @media (max-width: 1000px) {
    display: none;
  }

`
export const Title = styled.div`
    font-size: 27px;
    line-height: 40px;
    border-bottom: 1px solid #484848;
    padding: 9px 0px 12px 16px;
    margin-bottom: 22px;
`
export const Trend = styled(Link)`
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    cursor: pointer;
    padding: 0px 0px 6px 12px;
    display:flex;
`