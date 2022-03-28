import React, { useState, useEffect } from 'react';
import Trending from "../../components/Trending";
import { useLocation } from 'react-router';
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

export default function Timeline() {
    const { auth } = useAuth();
    const [isLoadingPosts, setIsLoadingPosts] = useState(true);
    const [posts, setPosts] = useState([]);
    const { pathname } = useLocation();
    const title = pathname.replace("/hashtag/","");
    useEffect(() => {
        api.hashtagPost(title,auth?.token)
            .then((res) => {
                setPosts(res.data);
                setIsLoadingPosts(false);
            })
            .catch((err) => {
                console.log(err);
            });
            window.scrollTo(0, 0)
            
        //eslint-disable-next-line
    }, [title]);

    return (
        <TimelineContainer>
            <TimelineBox>
                <TimelineBody>
                    <Title>#{title}</Title>
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
