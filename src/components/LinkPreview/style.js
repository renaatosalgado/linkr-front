import styled from "styled-components";

const LinkPreviewContainer = styled.div`
  height: 155px;
  border: 1px solid #4d4d4d;
  box-sizing: border-box;
  border-radius: 11px;
  position: relative;
  overflow-y: hidden;

  @media (max-width: 635px) {
    height: 115px;
  }
`;

const LeftContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 155px);
  padding-left: 19px;
  display: flex;
  flex-direction: column;

  @media (max-width: 635px) {
    padding-left: 15px;
    width: calc(100% - 115px);
  }
`;

const LinkTitle = styled.p`
  padding-bottom: 4px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #cecece;
  margin-top: 24px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  &:hover {
    cursor: pointer;
    color: #1877f2;
  }

  @media (max-width: 635px) {
    margin-top: 7px;
    margin-bottom: 4px;
    font-size: 11px;
  }
`;

const LinkDescription = styled.p`
  line-height: 1.5;
  padding-bottom: 2px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  color: #9b9595;
  margin-bottom: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  &:hover {
    cursor: pointer;
    color: #1877f2;
  }

  @media (max-width: 635px) {
    font-size: 9px;
    margin-bottom: 4px;
  }
`;

const LinkAnchor = styled.p`
  line-height: 1.25;
  padding-bottom: 2px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  color: #cecece;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  &:hover {
    cursor: pointer;
    color: #1877f2;
  }

  @media (max-width: 635px) {
    font-size: 9px;
  }
`;

const LinkImg = styled.img`
  position: absolute;
  width: 155px;
  height: 155px;
  right: 0;
  top: 0;
  border-radius: 0px 12px 13px 0px;
  cursor: pointer;

  @media (max-width: 635px) {
    width: 95px;
    height: 115px;
    border-radius: 0px 12px 13px 0px;
  }
`;

export {
  LinkPreviewContainer,
  LeftContainer,
  LinkTitle,
  LinkDescription,
  LinkAnchor,
  LinkImg,
};
