import styled from 'styled-components';

export const FollowButtonBox = styled.button`
    all:unset;
    font-family: 'Lato';
    position:absolute;
    background-color: ${(props) => (props.isFollowing ? '#FFFFFF' : '#1877F2')};
    color: ${(props) => (props.isFollowing ? '#1877F2' : '#FFFFFF')};
    left: 135%;
    width: 112px;
    height: 31px;
    border-radius: 5px;
    font-weight: 700;
    text-align: center;
    font-size: 14px;
    display: ${(props) => (props.isLoadingPosts || props.sameUser ? 'none' : 'inline')};
    @media (max-width: 1000px) {
        left: auto;
        right: 15px;
    }
`