import styled from 'styled-components';

const LogoContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 30vh 5vw;
    @media (max-width: 700px) {
        padding: 10px 0 27px 0;
        width: 100vw;
        height: 200px;
        align-items: center;
    }
`;

const Logo = styled.h1`
    font-family: 'Passion One';
    font-weight: 700;
    font-size: 106px;
    line-height: 117px;
    letter-spacing: 0.05em;
    color: #ffffff;
    @media (max-width: 700px) {
        font-size: 76px;
        line-height: 84px;
    }
`;

const Text = styled.p`
    font-family: 'Oswald';
    max-width: 442px;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #ffffff;
    @media (max-width: 700px) {
        font-size: 23px;
        line-height: 34px;
        text-align: center;
        max-width: 237px;
    }
`;

export { Logo, LogoContainer, Text };
