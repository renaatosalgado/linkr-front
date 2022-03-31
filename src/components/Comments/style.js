import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const AuthorData = styled.div`
    display: flex;
`;

const CommentText = styled.p`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #acacac;
    overflow: hidden;
`;

const CommentUserImage = styled.img`
    position: absolute;
    top: 19px;
    left: 25px;
    width: 39px;
    height: 39px;
    border-radius: 304px;
`;

const CommentUserName = styled(Link)`
    font-family: 'Lato';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #f3f3f3;
    cursor: pointer;
`;

const AuthorRelation = styled.p`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-left: 4px;

    color: #565656;
`;

const InnerContainer = styled.div`
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    padding: 16px 25px 16px 68px;
`;

const Spacer = styled.div`
    width: 571px;
    height: 0px;
    border: 1px solid #353535;
    transform: rotate(-0.1deg);
    align-self: center;
`;

const FormContainer = styled.div`
    display: flex;
    padding: 16px 25px 25px 78px;
    column-gap: 14px;
    position: relative;
`;

const Form = styled.form`
    position: relative;
    width: 100%;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 39px;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #acacac;
    background: #252525;
    border-radius: 8px;
    padding: 11px 37px 11px 15px;
    ::placeholder {
        font-style: italic;
        letter-spacing: 0.05em;
        color: #575757;
    }
`;

const Send = styled.button`
    position: absolute;
    top: 11px;
    right: 17px;
    cursor: pointer;
`;

export {
    CommentContainer,
    AuthorData,
    CommentText,
    CommentUserImage,
    CommentUserName,
    AuthorRelation,
    InnerContainer,
    Spacer,
    FormContainer,
    Form,
    Input,
    Send,
};
