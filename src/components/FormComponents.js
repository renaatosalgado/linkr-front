import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const Form = styled.form`
    width: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-bottom: 22px;
    @media (max-width: 950px) {
        width: 100%;
        padding: 0 22px;
    }
    @media (max-width: 700px) {
        width: 100%;
        padding: 40px 22px;
    }
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 65px;
    color: #000;
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    background: #ffffff;
    border-radius: 6px;
    padding: 0 17px;
    ::placeholder {
        color: #9f9f9f;
    }
`;

const Button = styled.button`
    cursor: pointer;
    width: 100%;
    height: 65px;
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    background: #1877f2;
    border-radius: 5px;
    :disabled {
        cursor: default;
    }
`;

const StyledLink = styled(Link)`
    cursor: pointer;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #ffffff;
    justify-self: center;
`;

const FormContainer = styled.div`
    min-width: 535px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    justify-self: flex-end;
    padding-top: ${(props) => (props.page === '/' ? '30vh' : '25vh')};
    @media (max-width: 1070px) {
        min-width: 50%;
    }
    @media (max-width: 700px) {
        width: 100%;
        justify-content: flex-start;
        padding-top: 10px;
    }
`;

export { Container, FormContainer, Form, Input, Button, StyledLink };
