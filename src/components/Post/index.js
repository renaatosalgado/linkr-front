import React, { useState } from 'react';

import {
    PostBox,
    PostContainer,
    LeftContainer,
    PerfilPicture,
    RightContainer,
    UserName,
    TextDescription,
} from './style';
import LinkPreview from '../LinkPreview';
import LikeHeart from '../LikeHeart';

export default function Post({
    url,
    linkTitle,
    linkDescription,
    linkImage,
    textDescription,
    postId,
    author,
    profilePicture,
    userId,
}) {
    const [like, setLike] = useState(false);

    return (
        <PostBox>
            <PostContainer>
                <LeftContainer>
                    <PerfilPicture src={profilePicture} />
                    <LikeHeart like={like} setLike={setLike} postId={postId} />
                </LeftContainer>
                <RightContainer>
                    <UserName to={`/user/${userId}`}>{author}</UserName>
                    <TextDescription>{textDescription}</TextDescription>
                    <LinkPreview
                        url={url}
                        linkTitle={linkTitle}
                        linkDescription={linkDescription}
                        linkImage={linkImage}
                    />
                </RightContainer>
            </PostContainer>
        </PostBox>
    );
}
