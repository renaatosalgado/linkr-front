import styled from 'styled-components';

const TimelineContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #333333;
    padding-top: 150px;
    display: flex;
    justify-content: center;

    @media (max-width: 635px) {
        padding-top: 20px;
    }
`;

const TimelineBox = styled.div`
    display: flex;
    padding-bottom: 30px;
    margin: 0 auto;

    @media (max-width: 635px) {
        width: 100%;
    }
`;

const TimelineBody = styled.div`
    width: 611px;
    margin: 0 auto;

    @media (max-width: 635px) {
        width: 100%;
        margin-top: 130px;
    }
`;

const Title = styled.div`
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 43px;
    color: #ffffff;
    margin-bottom: 50px;
    word-break: break-all;

    @media (max-width: 635px) {
        font-size: 33px;
        margin-left: 17px;
        margin-bottom: 30px;
    }
`;

const CenteredContainer = styled.div`
    min-width: 610px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 635px) {
        min-width: 100%;
    }
`;

const NoPostFound = styled.div`
    width: 611px;
    padding: 20px;
    background-color: #171717;
    border-radius: 16px;
    margin-top: 29px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Lato';
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    color: #ffffff;

    @media (max-width: 635px) {
        min-width: 100%;
        width: 100%;
        border-radius: 0;
    }
`;

export {
    TimelineContainer,
    TimelineBox,
    TimelineBody,
    Title,
    CenteredContainer,
    NoPostFound,
};
