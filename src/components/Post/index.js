import React, { useState } from "react";
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
} from "./style";
import LinkPreview from "../LinkPreview";
import LikeHeart from "../LikeHeart"

export default function Post({ url, linkTitle, linkDescription, linkImage, textDescription, postId, author, profilePicture }) {
  const [like, setLike] = useState(false);

  return (
    <PostBox>
      <PostContainer>
        <LeftContainer>
          <PerfilPicture src={profilePicture} />
          <LikeHeart like={like} setLike={setLike} postId={postId} />
        </LeftContainer>
        <RightContainer>
          <UserName>
              {author}
          </UserName>
          <TextDescription>
            <ReactHashtag
              renderHashtag={(hashtagValue) => (
                <Hashtag 
                to={`/hashtag/${hashtagValue.replace("#","")}`}
                >
                  {hashtagValue}
                </Hashtag>
              )}
            >
            {textDescription}
          </ReactHashtag>
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
