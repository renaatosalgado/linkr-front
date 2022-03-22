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
    <LinkPreviewContainer>
      <LeftContainer>
        <LinkTitle>{linkTitle}</LinkTitle>
        <LinkDescription>{linkDescription}</LinkDescription>
        <LinkAnchor>{url}</LinkAnchor>
      </LeftContainer>
      <LinkImg src={linkImage} />
    </LinkPreviewContainer>
  );
}
