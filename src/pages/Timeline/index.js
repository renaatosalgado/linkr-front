import React, { useState, useEffect } from 'react';
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
  CenteredContainer,
  NoPostFound,
} from "./style";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import NewPostsButton from '../../components/NewPostsButton';

export default function Timeline() {
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [isLoadingPosts, setIsLoadingPosts] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.listAllPosts(auth?.token)
            .then((res) => {
                setPosts(res.data);
                setIsLoadingPosts(false);
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to update the timeline!',
                    text: 'An error occured while trying to fetch the posts, please refresh the page.',
                });
            });

        //eslint-disable-next-line
    }, []);

    function publishPost(event) {
        event.preventDefault();
        setLoading(true);

        const body = {
            description,
            url,
        };
        api.createPost(body, auth?.token)
            .then((res) => {
                setLoading(false);
                setDescription('');
                setUrl('');
                window.location.reload();
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Post not published!',
                    text: 'There was an error while posting your link. Repeat the procedure.',
                });
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
                            <ProfilePic src={auth?.user?.image} alt="" />
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
                                <Publish
                                    type={'submit'}
                                    disabled={loading ? true : false}
                                >
                                    {loading ? 'Publishing...' : 'Publish'}
                                </Publish>
                            </Buttons>
                        </Form>
                    </CreatePost>

                    <NewPostsButton newPostsQuantity={10}/>

                    {isLoadingPosts ? (
                        <CenteredContainer>
                            <ThreeDots
                                color="#ffffff"
                                height={100}
                                width={100}
                            />
                        </CenteredContainer>
                    ) : posts.length === 0 ? (
                        <NoPostFound>There are nos posts yet</NoPostFound>
                    ) : (
                        posts.map((post) => (
                            <Post
                                key={post.id}
                                postId={post.id}
                                url={post.url}
                                linkTitle={post.urlTitle}
                                linkDescription={post.urlDescription}
                                linkImage={post.urlImage}
                                textDescription={post.description}
                                author={post.author}
                                profilePicture={post.profilePicture}
                                userId={post.userId}
                            />
                        ))
                    )}
                </TimelineBody>
              <Trending />
            </TimelineBox>
        </TimelineContainer>
    );
}
