import React, { useState, useRef, useEffect } from "react";
import ReactHashtag from "@mdnm/react-hashtag";

import {
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
} from "./style";
import LinkPreview from "../LinkPreview";
import LikeHeart from "../LikeHeart";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import DeleteModal from "../DeleteModal";

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
  const editRef = useRef();
  const [editFocus, setEditFocus] = useState(false);
  const [postText, setPostText] = useState(textDescription);
  const [description, setDescription] = useState(postText);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (editFocus) {
      editRef.current.focus();
    }
  }, [editFocus]);

  function handleEditPost() {
    if (edit) {
      setDescription(postText);
    }
    setEditFocus(!editFocus);
    setEdit(!edit);
  }

  async function keyEvents(e) {
    if (e.keyCode === 27) {
      handleEditPost();
    }
    if (e.keyCode === 13) {
      setLoading(true);
      const body = {
        description,
      };
      try {
        await api.editPost(postId, body, auth?.token);
        setLoading(false);
        setPostText(description);
        setEdit(!edit);
        setEditFocus(!editFocus);
      } catch (error) {
        alert("Something went wrong, please try again");
        setLoading(false);
      }
    }
  }


  return (
    <PostBox>
      {openModal && <DeleteModal openModal={openModal} setOpenModal={setOpenModal} postId={postId} />}
      <PostContainer>
        <LeftContainer>
          <PerfilPicture src={profilePicture} />
          <LikeHeart like={like} setLike={setLike} postId={postId} />
        </LeftContainer>
        <RightContainer>
          <TopContainer>
            <UserName to={`/user/${userId}`}>{author}</UserName>
            {userId === auth.user.id && (
              <IconBox>
                <EditIcon size="20" onClick={handleEditPost} />
                <DeleteIcon size="20" onClick={() => setOpenModal(true)} />
              </IconBox>
            )}
          </TopContainer>
          {edit ? (
            <EditInput
              disabled={loading}
              ref={editRef}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onKeyDown={keyEvents}
            />
          ) : (
            <TextDescription>
            <ReactHashtag
              renderHashtag={(hashtagValue) => (
                <Hashtag 
                to={`/hashtag/${hashtagValue.replace("#","")}`}>
                  {hashtagValue}
                </Hashtag>
              )}
            >
            {postText}
          </ReactHashtag>
          </TextDescription>
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
