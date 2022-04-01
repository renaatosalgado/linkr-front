import React, { useState, useEffect, useRef } from 'react';
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
  InfiniteLoader
} from "./style";
import { ThreeDots, TailSpin } from "react-loader-spinner";
import Swal from "sweetalert2";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import NewPostsButton from '../../components/NewPostsButton';
import { NoPostFound } from '../../components/NoPostFound';

export default function Timeline() {
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [isLoadingPosts, setIsLoadingPosts] = useState(true);
    const [posts, setPosts] = useState([]);
    const [updatedPostsQuantity, setUpdatedPostsQuantity] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [hasMorePosts, setHasMorePosts] = useState(false);
    const loaderRef = useRef(null);
    
    useEffect(() => {
        let intervalId;

            api.listAllPosts(0, pageNumber, auth?.token)
            .then((res) => {
                setPosts(...posts, res.data);
                setHasMorePosts(res.data.length > 0)
                setIsLoadingPosts(false);

               intervalId = setInterval(() => {
                    api.updatePostsQuantity(res.data[0].datetime, auth?.token).then(res => {
                        setUpdatedPostsQuantity(res.data.length);                
                    })           
                }, 15000)
                
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to update the timeline!',
                    text: 'An error occured while trying to fetch the posts, please refresh the page.',
                });
            });
            return () => clearInterval(intervalId)
        //eslint-disable-next-line
    }, []);

    // useEffect(() => {
    //     const options = {
    //       root: null,
    //       rootMargin: "20px",
    //       threshold: 1.0
    //     };
    
    //     const observer = new IntersectionObserver((entities) => {
    //       const target = entities[0];
    
    //       if (target.isIntersecting){
    //         setPageNumber(pageNumber + 1);
    //       }
    //     }, options);
    
    //     if (loaderRef.current){
    //       observer.observe(loaderRef.current);
    //     }
    //     return () => {
    //         observer.disconnect()
    //     }
    //   }, []);

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

                    <NewPostsButton updatedPostsQuantity={updatedPostsQuantity} />

                    {isLoadingPosts ? (
                        <CenteredContainer>
                            <ThreeDots
                                color="#ffffff"
                                height={100}
                                width={100}
                            />
                        </CenteredContainer>
                    ) : posts.length === 0 ? (
                        <NoPostFound />
                    ) : (
                        posts.map((post, i) => (
                            <Post
                                key={i}
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
                                repostedBy={post.repostedBy}
                            />
                        ))
                    )}
                   
                                        <InfiniteLoader ref={loaderRef}>
                                             <TailSpin
                                                 color="#6D6D6D"
                                                 height={36}
                                                 width={36}
                                             />
                                             <p>Loading more posts...</p>
                                         </InfiniteLoader>
                              
            
                    
                </TimelineBody>
              <Trending />
            </TimelineBox>
        </TimelineContainer>
    );
}
