import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi';
import { TiPencil } from 'react-icons/ti';
import { TiArrowRepeat } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const PostBox = styled.div`
    background-color: #1e1e1e;
    width: 610px;
    border-radius: 16px;

    @media (max-width: 635px) {
        width: 100%;
        border-radius: 0;
    }
`;

const PostContainer = styled.div`
    position: relative;
    width: 610px;
    padding-bottom: ${(props) => (props.isReposted ? '0' : '16px')};
    background-color: #171717;
    border-radius: 16px;
    margin-top: ${(props) => (props.isReposted ? '0' : '38px')};
    display: flex;

    @media (max-width: 635px) {
        width: 100%;
        border-radius: 0;
        //margin-top: 16px;
    }
`;

const LeftContainer = styled.div`
    /* padding: 17px 18px; */
    padding: 17px 0 17px 0;
    width: 87px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 635px) {
        /* padding: 9px 15px; */
        padding: 9px 3px;
        width: 70px;
        text-align: center;
    }
`;

const PerfilPicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-bottom: 19px;
    @media (max-width: 635px) {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin-bottom: 19px;
    }
`;

const RightContainer = styled.div`
    padding-top: 19px;
    padding-right: 21px;
    width: calc(100% - 86px);
    display: flex;
    flex-direction: column;

    @media (max-width: 635px) {
        padding-top: 10px;
        padding-right: 18px;
        width: 100%;
    }
`;

const UserName = styled(Link)`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    color: #ffffff;
    padding-bottom: 7px;
    max-width: 455px;
    word-break: break-word;
    cursor: pointer;
    @media (max-width: 635px) {
        font-size: 17px;
    }
`;

const TextDescription = styled.div`
    border-radius: 7px;
    font-size: 17px;
    color: #b7b7b7;
    font-weight: 400;
    line-height: 20.4px;
    margin-bottom: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
`;

const Hashtag = styled(Link)`
    cursor: pointer;
    font-weight: 700;
    color: #ffffff;
`;

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const IconBox = styled.div`
    display: flex;
    gap: 10px;
`;

const EditIcon = styled(TiPencil)`
    color: #fff;
    cursor: pointer;
`;

const DeleteIcon = styled(FiTrash)`
    color: #fff;
    cursor: pointer;
`;

const EditInput = styled.input`
    border-radius: 7px;
    background-color: #fff;
    padding: 5px;
    margin-bottom: 8px;
`;

const CommentsIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px auto 5px auto;
    row-gap: 4px;
`;

const Icon = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    cursor: pointer;
`;

const Count = styled.p`
    width: 67px;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
`;

const RepostIcon = styled(TiArrowRepeat)`
    font-size: 28px;
    color: #fff;
    cursor: pointer;
`;

const LeftIcons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    span {
        font-size: 11px;
        color: #fff;
    }
`;

export {
    PostBox,
    PostContainer,
    LeftContainer,
    PerfilPicture,
    RightContainer,
    UserName,
    TextDescription,
    Hashtag,
    TopContainer,
    IconBox,
    EditIcon,
    DeleteIcon,
    EditInput,
    CommentsIcon,
    Icon,
    Count,
    RepostIcon,
    LeftIcons,
};
