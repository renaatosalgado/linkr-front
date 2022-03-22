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
  Link,
  Description,
  Buttons,
  Publish,
} from "./style";

export default function Timeline() {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
  const [text, setText] = useState("");

  function publishPost(event) {
    // event.preventDefault();
    // setLoading(true);
    // const body = {
    //   text,
    //   link,
    // };
    // postCreatePost(body, config)
    //   .then((res) => {
    //     setLoading(false);
    //     setText("");
    //     setLink("");
    //     window.location.reload();
    //   })
    //   .catch(() => {
    //     alert(
    //       "There was an error while posting your link. Repeat the procedure."
    //     );
    //     setLoading(false);
    //   });
  }

  return (
    <TimelineContainer>
      <TimelineBox>
        <TimelineBody>
          <Title>timeline</Title>
          <CreatePost>
            <CreatePostImg>
              {/* <ProfilePic src={user.user.avatar} alt="" /> */}
            </CreatePostImg>
            <Form onSubmit={publishPost}>
              <p>What do you have to share today?</p>
              <Link
                type="url"
                placeholder="http://"
                value={link}
                disabled={loading ? true : false}
                required
                onChange={(e) => setLink(e.target.value)}
              ></Link>
              <Description
                type="text"
                disabled={loading ? true : false}
                value={text}
                onChange={(e) => setText(e.target.value)}
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
