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
@media (max-width: 635px) {
  font-size: 25px;
  line-height: 30px;
  padding: 10px 25px;
}
`

const CancelButton = styled.button`
width: 134px;
height: 37px;
background-color: #fff;
color: #1877F2;
border-radius: 5px;
text-align: center;
cursor: pointer;
@media (max-width: 635px) {
  width: 108px;
  height: 32px;
  font-size: 14px;
  line-height: 18px;
}
`

const ConfirmButton = styled.button`
width: 134px;
height: 37px;
background-color: #1877F2;
color: #fff;
border-radius: 5px;
text-align: center;
cursor: pointer;
@media (max-width: 635px) {
  width: 108px;
  height: 32px;
  font-size: 14px;
  line-height: 18px;
}
`
const ButtonBox = styled.div`
margin-top: 60px;
display: flex;
justify-content: center;
gap: 27px;
@media (max-width: 635px) {
        gap: 20px;
        
        padding: 10px 0;
    }
`

export {ModalText, CancelButton, ConfirmButton, ButtonBox}