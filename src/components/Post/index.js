import React, { useState } from "react";

import {
  PostBox,
  PostContainer,
  LeftContainer,
  PerfilPicture,
  RightContainer,
  UserName,
  TextDescription,
} from "./style";
import useAuth from "../../hooks/useAuth";
import LinkPreview from "../LinkPreview";
import LikeHeart from "../LikeHeart"

export default function Post({ url, linkTitle, linkDescription, linkImage, textDescription }) {
  const { auth } = useAuth();
  const [like, setLike] = useState(false);

  return (
    <PostBox>
      <PostContainer>
        <LeftContainer>
          <PerfilPicture src={auth.user.image} />
          <LikeHeart like={like} setLike={setLike} />
        </LeftContainer>
        <RightContainer>
          <UserName>
              {auth.user.name}
          </UserName>
          <TextDescription>
              {textDescription}
          </TextDescription>
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
