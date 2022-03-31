import React, { useState, useRef, useEffect } from 'react';
import ReactHashtag from '@mdnm/react-hashtag';
import {
    PostBox,
    PostContainer,
    LeftContainer,
    PerfilPicture,
    RightContainer,
    UserName,
    TextDescription,
    Hashtag,
    TopContainer,
    IconBox,
    EditIcon,
    DeleteIcon,
    EditInput,
    RepostIcon,
    LeftIcons,
    CommentsIcon,
    Icon,
    Count,
} from './style';
import LinkPreview from '../LinkPreview';
import LikeHeart from '../LikeHeart';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import DeleteModal from '../DeleteModal';
import RepostModal from '../RepostModal';
import Comments from '../Comments/index';
import { IconContext } from 'react-icons';
import { AiOutlineComment } from 'react-icons/ai';

export default function Post({
    url,
    linkTitle,
    linkDescription,
    linkImage,
    textDescription,
    postId,
    author,
    profilePicture,
    userId,
    repost
}) {
    const [like, setLike] = useState(false);
    const { auth } = useAuth();
    const [edit, setEdit] = useState(false);
    const editRef = useRef();
    const [editFocus, setEditFocus] = useState(false);
    const [postText, setPostText] = useState(textDescription);
    const [description, setDescription] = useState(postText);
    const [loading, setLoading] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openRepostModal, setOpenRepostModal] = useState(false);
    const [comments, setComments] = useState([]);
    const [areCommentsOpen, setAreCommentsOpen] = useState(false);

    useEffect(() => {
        if (editFocus) {
            editRef.current.focus();
        }
    }, [editFocus]);

    useEffect(() => {
        getComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getComments() {
        try {
            const response = await api.getComments(postId, auth.token);
            setComments(response.data);
        } catch (error) {}
    }

    function handleEditPost() {
        if (edit) {
            setDescription(postText);
        }
        setEditFocus(!editFocus);
        setEdit(!edit);
    }

    async function keyEvents(e) {
        if (e.keyCode === 27) {
            handleEditPost();
        }
        if (e.keyCode === 13) {
            setLoading(true);
            const body = {
                description,
            };
            try {
                await api.editPost(postId, body, auth?.token);
                setLoading(false);
                setPostText(description);
                setEdit(!edit);
                setEditFocus(!editFocus);
            } catch (error) {
                alert('Something went wrong, please try again');
                setLoading(false);
            }
        }
    }

    return (
        <PostBox key={postId}>
            {openDeleteModal && (
                <DeleteModal
                    openDeleteModal={openDeleteModal}
                    setOpenDeleteModal={setOpenDeleteModal}
                    postId={postId}
                />
            )}
            {openRepostModal && (
                <RepostModal
                    openRepostModal={openRepostModal}
                    setOpenRepostModal={setOpenRepostModal}
                    postId={postId}
                />
            )}
            <PostContainer>
                <LeftContainer>
                    <PerfilPicture src={profilePicture} />
                    <LeftIcons>
                    <LikeHeart like={like} setLike={setLike} postId={postId} />
                    <CommentsIcon>
                        <Icon>
                            <IconContext.Provider
                                value={{
                                    color: 'white',
                                    size: '1.7em',
                                }}
                            >
                                <AiOutlineComment
                                    onClick={() =>
                                        setAreCommentsOpen(!areCommentsOpen)
                                    }
                                />
                            </IconContext.Provider>
                        </Icon>
                        <Count>{`${comments.length} comment${
                            comments?.length === 1 ? '' : 's'
                        }`}</Count>
                    </CommentsIcon>
                    <RepostIcon onClick={() => setOpenRepostModal(true)}/>
                        <span>{repost} re-posts</span>
                    </LeftIcons>
                </LeftContainer>
                <RightContainer>
                    <TopContainer>
                        <UserName to={`/user/${userId}`}>{author}</UserName>
                        {userId === auth?.user.id && (
                            <IconBox>
                                <EditIcon size="20" onClick={handleEditPost} />
                                <DeleteIcon
                                    size="20"
                                    onClick={() => setOpenDeleteModal(true)}
                                />
                            </IconBox>
                        )}
                    </TopContainer>
                    {edit ? (
                        <EditInput
                            disabled={loading}
                            ref={editRef}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            onKeyDown={keyEvents}
                        />
                    ) : (
                        <TextDescription>
                            <ReactHashtag
                                renderHashtag={(hashtagValue) => (
                                    <Hashtag
                                        to={`/hashtag/${hashtagValue.replace(
                                            '#',
                                            ''
                                        )}`}
                                    >
                                        {hashtagValue}
                                    </Hashtag>
                                )}
                            >
                                {postText}
                            </ReactHashtag>
                        </TextDescription>
                    )}
                    <LinkPreview
                        url={url}
                        linkTitle={linkTitle}
                        linkDescription={linkDescription}
                        linkImage={linkImage}
                    />
                </RightContainer>
            </PostContainer>
            <Comments
                postId={postId}
                commentsOpen={areCommentsOpen}
                comments={comments}
                setComments={setComments}
            />
        </PostBox>
    );
}
