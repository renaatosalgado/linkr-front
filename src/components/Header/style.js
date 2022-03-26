import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopBar = styled.div`
    width: 100%;
    height: 72px;
    background: #151515;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    @media (max-width: 635px) {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

const Logo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 10px;
    left: 28px;
    font-family: 'Passion One';
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    color: #ffffff;
    cursor: pointer;

    @media (max-width: 635px) {
        position: fixed;
        top: 13px;
        left: 17px;
        font-size: 45px;
        line-height: 50px;
    }
`;

const Photo = styled.img`
    cursor: pointer;
    position: fixed;
    top: 10px;
    right: 17px;
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
    @media (max-width: 635px) {
        position: fixed;
        top: 12px;
        right: 14px;
        width: 44px;
        height: 44px;
    }
`;

const Arrow = styled.div`
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 85px;
    @media (max-width: 635px) {
        position: fixed;
        top: 20px;
        right: 70px;
    }
`;

const LogoutButton = styled.button`
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 133px;
    height: 47px;
    padding-top: 9px;
    background: #171717;
    border-radius: 0px 0px 0px 20px;
    font-family: 'Lato';
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
    position: fixed;
    top: 72px;
    right: 0px;
    :disabled {
        cursor: default;
    }
    @media (max-width: 635px) {
        height: 43px;
        padding-top: 10px;
        font-size: 15px;
    }
`;

export { TopBar, Logo, Photo, Arrow, LogoutButton };
