import React, { useState } from "react";

import {
  PostBox,
  PostContainer,
  LeftContainer,
  PerfilPicture,
  RightContainer,
  UserName,
  TextDescription,
  EditIcon,
  DeleteIcon,
} from "./style";
import LinkPreview from "../LinkPreview";
import LikeHeart from "../LikeHeart";
import useAuth from "../../hooks/useAuth";

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
  const { auth } = useAuth();

  return (
    <PostBox>
      <PostContainer>
        <LeftContainer>
          <PerfilPicture src={profilePicture} />
          <LikeHeart like={like} setLike={setLike} postId={postId} />
        </LeftContainer>
        <RightContainer>
          <UserName>{author}</UserName>
          {userId === auth.user.id && (
            <>
              {" "}
              <EditIcon size="20" />
              <DeleteIcon size="20" />
            </>
          )}
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
