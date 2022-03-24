import React, { useState } from "react";

import {
  PostBox,
  PostContainer,
  LeftContainer,
  PerfilPicture,
  RightContainer,
  UserName,
  TextDescription,
  TopContainer,
  IconBox,
  EditIcon,
  DeleteIcon,
  EditInput,
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
  const [edit, setEdit] = useState(false);

  function editPost() {
    setEdit(!edit);
  }

  return (
    <PostBox>
      <PostContainer>
        <LeftContainer>
          <PerfilPicture src={profilePicture} />
          <LikeHeart like={like} setLike={setLike} postId={postId} />
        </LeftContainer>
        <RightContainer>
          <TopContainer>
            <UserName>{author}</UserName>
            {userId === auth.user.id && (
              <IconBox>
                <EditIcon size="20" onClick={editPost} />
                <DeleteIcon size="20" />
              </IconBox>
            )}
          </TopContainer>
          {edit ? (
            <EditInput placeholder={textDescription} />
          ) : (
            <TextDescription>{textDescription}</TextDescription>
          )}
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
