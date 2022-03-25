import styled from "styled-components";

const ModalText = styled.h1`
width: 500px;
height: 82px;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 41px;
text-align: center;
color: #FFFFFF;
`

const CancelButton = styled.button`
width: 134px;
height: 37px;
background-color: #fff;
color: #1877F2;
border-radius: 5px;
text-align: center;
`

const ConfirmButton = styled.button`
width: 134px;
height: 37px;
background-color: #1877F2;
color: #fff;
border-radius: 5px;
text-align: center;
`
const ButtonBox = styled.div`
margin-top: 60px;
display: flex;
justify-content: center;
gap: 27px;
`

export {ModalText, CancelButton, ConfirmButton, ButtonBox}