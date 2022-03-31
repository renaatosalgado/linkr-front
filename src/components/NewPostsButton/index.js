import React from "react";
import { LoadButton, SyncIcon } from "./style";

export default function NewPostsButton({ updatedPostsQuantity }) {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <LoadButton
      type={"button"}
      onClick={refreshPage}
      updatedPostsQuantity={updatedPostsQuantity}
    >
      {updatedPostsQuantity === 1
        ? `${updatedPostsQuantity} new post, load it!`
        : `${updatedPostsQuantity} new posts, load more!`}
      <SyncIcon />
    </LoadButton>
  );
}
