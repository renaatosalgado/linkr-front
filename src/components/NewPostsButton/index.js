import React, { useState } from "react";
import api from "../../services/api";
import { LoadButton, SyncIcon } from "./style";
import useAuth from "../../hooks/useAuth";

export default function NewPostsButton({ newPostsQuantity }) {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);

  function fetchNewPosts() {
    setLoading(true);

    api.listAllPosts(auth?.token).then((res) => {
      setLoading(false);
      console.log(res.data);
    });
  }
  return (
    <LoadButton
      type={"button"}
      onClick={fetchNewPosts}
      disabled={loading ? true : false}
    >
      {loading
        ? "Loading more posts..."
        : `${newPostsQuantity} new posts, load more!`}

      <SyncIcon />
    </LoadButton>
  );
}
