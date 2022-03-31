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
    }
`;

const Title = styled.div`
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 43px;
    color: #ffffff;
    margin-bottom: 50px;

    @media (max-width: 635px) {
        font-size: 33px;
        margin-top: 120px;
        margin-left: 17px;
        margin-bottom: 20px;
    }
`;

const CreatePost = styled.div`
    width: 610px;
    height: 209px;
    background-color: #ffffff;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 635px) {
        width: 100%;
        height: 164px;
        border-radius: 0;
    }
`;

const CreatePostImg = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 16px;

    @media (max-width: 635px) {
        display: none;
    }
`;

const ProfilePic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-right: 18px;
`;

const Form = styled.form`
    font-family: 'Lato', sans-serif;
    display: flex;
    width: 503px;
    flex-direction: column;
    font-weight: 300;
    margin-top: 16px;

    p {
        color: #707070;
        font-size: 20px;
        font-weight: 300;
        line-height: 24px;
        margin-bottom: 10px;
    }

    &:disabled {
        opacity: 0.5;
    }

    @media (max-width: 635px) {
        width: calc(100% - 30px);
        margin-top: 10px;

        p {
            text-align: center;
            font-size: 17px;
            margin-bottom: 7px;
            line-height: 20px;
        }
    }
`;

const Url = styled.input`
    background-color: #efefef;
    height: 30px;
    border-radius: 5px;
    margin-bottom: 5px;
    line-height: 18px;
    padding-left: 12px;

    &::placeholder {
        color: #949494;
        font-size: 15px;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        opacity: 0.5;
    }
`;

const Description = styled.textarea`
    border-radius: 5px;
    background-color: #efefef;
    height: 66px;
    line-height: 18px;
    margin-bottom: 5px;
    padding-top: 8px;
    padding-left: 12px;
    resize: none;
    outline: none;
    border: none;

    &::placeholder {
        color: #949494;
        font-size: 15px;
        font-weight: 300;
    }

    &:disabled {
        opacity: 0.5;
    }

    @media (max-width: 635px) {
        height: 47px;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Publish = styled.button`
    background-color: #1877f2;
    width: 112px;
    height: 31px;
    color: #ffffff;
    font-weight: bold;
    border-radius: 5px;
    text-align: center;

    &:hover {
        cursor: pointer;
        filter: brightness(90%);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    @media (max-width: 635px) {
        height: 22px;
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
    CreatePost,
    CreatePostImg,
    ProfilePic,
    Form,
    Url,
    Description,
    Buttons,
    Publish,
    CenteredContainer,
    NoPostFound,
};
