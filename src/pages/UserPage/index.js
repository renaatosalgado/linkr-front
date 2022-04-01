import React, { useState, useEffect } from 'react';
import Trending from "../../components/Trending";
import { useParams } from 'react-router-dom';
import {
    TimelineContainer,
    TimelineBox,
    TimelineBody,
    Title,
    CenteredContainer,
    NoPostFound,
} from './style';
import { ThreeDots } from 'react-loader-spinner';
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';
import Post from '../../components/Post';
import FollowButton from '../../components/FollowButton';

function UserPage() {
    const { id } = useParams();
    const { auth } = useAuth();
    const [isLoadingPosts, setIsLoadingPosts] = useState(true);
    const [posts, setPosts] = useState([]);
    const [userName, setUserName] = useState();

    useEffect(() => {
        api.listUserPosts(auth?.token, id)
            .then(({ data }) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
            });
            window.scrollTo(0, 0)
        //eslint-disable-next-line
    }, [id]);

    function setData(data) {
        setPosts(data.posts);
        setUserName(data.authorName);
        setIsLoadingPosts(false);
    }

    return (
        <TimelineContainer>
            <TimelineBox>
                <TimelineBody>
                    <Title>{userName ? `${userName}'s posts` : ''}
                        <FollowButton isLoadingPosts={isLoadingPosts} followedId={id}>Follow</FollowButton>
                    </Title>

                    {isLoadingPosts ? (
                        <CenteredContainer>
                            <ThreeDots
                                color="#ffffff"
                                height={100}
                                width={100}
                            />
                        </CenteredContainer>
                    ) : posts.length === 0 ? (
                        <NoPostFound>There are no posts yet</NoPostFound>
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
                                repost={post.repostCount}
                            />
                        ))
                    )}
                </TimelineBody>

                <Trending />
            </TimelineBox>
        </TimelineContainer>
    );
}

export default UserPage;