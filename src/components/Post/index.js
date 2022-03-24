import React, { useState, useRef, useEffect } from "react";

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
import api from "../../services/api";

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
  const [description, setDescription] = useState("");
  const editRef = useRef();
  const [editFocus, setEditFocus] = useState(false);
  const [postText, setPostText] = useState(textDescription);

  useEffect(() => {
    if (editFocus) {
      editRef.current.focus();
    }
  }, [editFocus]);

  function handleEditPost() {
    if (edit) {
      setDescription("");
    } else {
      setEditFocus(!editFocus);
      // editRef.current.focus();
    }
    setEdit(!edit);
  }

  async function keyEvents(e) {
    if (e.keyCode === 27) {
      handleEditPost();
    }
    if (e.keyCode === 13) {
      console.log("teste");
      const body = {
        description,
      };
      try {
        await api.editPost(postId, body, auth?.token);
        setPostText(description);
        setEdit(!edit);
      } catch (error) {
        console.log(error.response);
      }
    }
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
                <EditIcon size="20" onClick={handleEditPost} />
                <DeleteIcon size="20" />
              </IconBox>
            )}
          </TopContainer>
          {edit ? (
            <EditInput
              ref={editRef}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={postText}
              onKeyDown={keyEvents}
            />
          ) : (
            <TextDescription>{postText}</TextDescription>
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
