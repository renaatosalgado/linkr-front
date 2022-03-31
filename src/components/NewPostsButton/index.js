import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { LoadButton, SyncIcon } from "./style";

export default function NewPostsButton(/*{ newPostsQuantity, interval }*/) {
  const { auth } = useAuth();
  const [counter, setCounter] = useState(0);
  let totalPosts = 0;
  let newTotalPosts = 0;
  let newPostsQuantity = 0;

  function refreshPage() {
    // clearInterval(interval);

    const interval = setInterval(() => {
      api.getPostsQuantity(auth?.token).then((res) => {
        console.log(res.data.length);

        newTotalPosts = res.data.length;
        console.log({ newTotalPosts });

        newPostsQuantity = newTotalPosts - totalPosts;
        console.log({ newPostsQuantity });

        totalPosts = newTotalPosts;
        console.log({ totalPosts });

        setCounter(counter + newPostsQuantity)
      });
    }, 5000);
    //window.location.reload();
  }

  return (
    <LoadButton type={"button"} onClick={refreshPage}>
      {counter} new posts, load more!
      <SyncIcon />
    </LoadButton>
  );
}
