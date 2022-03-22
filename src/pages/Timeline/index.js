import React, { useState } from "react";
import {
  TimelineContainer,
  TimelineBox,
  TimelineBody,
  Title,
  CreatePost,
  CreatePostImg,
  ProfilePic,
  Form,
  Url,
  Description,
  Buttons,
  Publish,
} from "./style";

import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Timeline() {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  function publishPost(event) {
    event.preventDefault();
    setLoading(true);

    const body = {
      description,
      url,
    };

    api
      .createPost(body, auth.token)
      .then((res) => {
        setLoading(false);
        setDescription("");
        setUrl("");
        window.location.reload();
      })
      .catch(() => {
        alert(
          "There was an error while posting your link. Repeat the procedure."
        );
        setLoading(false);
      });
  }

  return (
    <TimelineContainer>
      <TimelineBox>
        <TimelineBody>
          <Title>timeline</Title>
          <CreatePost>
            <CreatePostImg>
              <ProfilePic src={auth.user.image} alt="" />
            </CreatePostImg>
            <Form onSubmit={publishPost}>
              <p>What do you have to share today?</p>
              <Url
                type="url"
                placeholder="http://"
                value={url}
                disabled={loading ? true : false}
                required
                onChange={(e) => setUrl(e.target.value)}
              ></Url>
              <Description
                type="text"
                disabled={loading ? true : false}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Very cool this link talking about #javascript"
              ></Description>
              <Buttons>
                <Publish type={"submit"} disabled={loading ? true : false}>
                  {loading ? "Publishing..." : "Publish"}
                </Publish>
              </Buttons>
            </Form>
          </CreatePost>
        </TimelineBody>
      </TimelineBox>
    </TimelineContainer>
  );
}
