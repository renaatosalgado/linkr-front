import React from "react";
import {
  LinkPreviewContainer,
  LeftContainer,
  LinkTitle,
  LinkDescription,
  LinkAnchor,
  LinkImg,
} from "./style";

export default function LinkPreview({
  url,
  linkTitle,
  linkDescription,
  linkImage,
}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <LinkPreviewContainer>
        <LeftContainer>
          <LinkTitle>{linkTitle}</LinkTitle>
          <LinkDescription>{linkDescription}</LinkDescription>
          <LinkAnchor>{url}</LinkAnchor>
        </LeftContainer>
        <LinkImg src={linkImage} />
      </LinkPreviewContainer>
    </a>
  );
}
